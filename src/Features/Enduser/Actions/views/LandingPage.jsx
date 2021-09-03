// landing page is the same as an action page, except that there's no login required
// use case is primarily for a landing page which would lead a user to an ActionPage
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getActionPageByArtistAndPageRoute } from '../../../../graphql-custom/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionStepper } from '../ActionStepper';
import { ActionHeader } from '../ActionHeader';
import { Spinner } from '../../../../Components/UI/Spinner';
import {
  ActionPageContainer,
  StyledContainer,
  BodyContainer,
} from '../ActionPageContainer';
import { PublicClient } from '../../../../Components/ApolloProvider/PublicClient';
import { PlayWidget } from '../../../../Components/UI/Integrations/SoundCloud/PlayWidget';
import Icon from '../../../../Components/UI/Icon';
import tempImage from '../../../../assets/whoash.jpg';

const LandingPageActionPageContainer = styled(ActionPageContainer)`
  position: relative;
`;

const LandingPageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const ArtistImage = styled.div`
  position: fixed;
  background-image: url(${props => props.imageSrc});
  background-attachment: scroll;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: table-cell;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  -o-filter: blur(20px);
  filter: blur(20px);
  height: 100%;
  pointer-events: none;
  position: absolute;
  vertical-align: middle;
  width: 100%;
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
`;

const FanMagnetWidget = styled(Container)`
  background: #1f1f1f 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  max-width: 660px;
  position: relative;
  justify-content: space-around;
`;

const MagnetHeader = styled.div`
  font-size: 50px;
  text-align: center;
`;

// landing page is essentially an action page that is public, so there are no points and we're using a different Apollo client (no auth)
export const LandingPage = () => {
  console.log('hello from landing page');
  const [actionValues, setActionValues] = useState([]);
  // here we're defining a default page route as "landing" so if no pageRoute is provided, we'll use that
  const { artist, page = 'landing' } = useParams();
  const { data: actionPageData, loading } = useQuery(
    gql(getActionPageByArtistAndPageRoute),
    {
      variables: { artistRoute: artist, pageRoute: page },
      client: PublicClient,
    }
  );

  const handleAction = id => {
    const updatedActions = actionValues.map(item => {
      if (item.id === id)
        return {
          ...item,
          complete: true,
        };
      return item;
    });
    setActionValues(updatedActions);
  };

  useEffect(() => {
    if (actionPageData && actionPageData?.ArtistByRoute?.items?.length > 0) {
      const actionArray =
        actionPageData.ArtistByRoute.items[0].actionPages.items[0].actionButtons
          .items;
      const values = [];
      for (let i = 0; i < actionArray.length; i++) {
        const element = actionArray[i];
        values.push({
          id: element.id,
          complete: false,
          points: +element.pointValue,
        });
      }
      setActionValues(values);
    }
  }, [actionPageData]);

  if (loading)
    return (
      <ActionPageContainer fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ textAlign: 'center' }}>
            <Spinner animation="border" role="status" variant="light" />
          </Col>
        </Row>
      </ActionPageContainer>
    );
  // if the actionPageInfo exists, it should be in this format (assuming a single artist route and page route exist)

  if (actionPageData?.ArtistByRoute?.items?.length === 0) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>No Actions</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  const actionPageInfo =
    actionPageData.ArtistByRoute.items[0].actionPages.items[0];

  console.log('actionPageInfo', actionPageInfo);

  return (
    <LandingPageContainer>
      <ArtistImage imageSrc={tempImage} />
      <FanMagnetWidget>
        <MagnetHeader>{actionPageInfo.heading}</MagnetHeader>
        <PlayWidget sourceUrl="https://soundcloud.com/whosah/make-a-move" />
        {/* <button type="button" onClick={() => {}}>
          CLAIM YOUR FREE GIFT
        </button> */}
        <ActionButtons
          data={actionPageInfo}
          state={actionValues}
          handleAction={handleAction}
        />
      </FanMagnetWidget>
    </LandingPageContainer>
  );
};
