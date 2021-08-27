// landing page is the same as an action page, except that there's no login required
// use case is primarily for a landing page which would lead a user to an ActionPage
import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom';
import { getActionPageByArtistAndPageRoute} from '../../../../graphql-custom/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionStepper } from '../ActionStepper';
import { ActionHeader } from '../ActionHeader';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionPageContainer, StyledContainer, BodyContainer } from '../ActionPageContainer';
import { PublicClient } from '../../../../Components/ApolloProvider/PublicClient';

// landing page is essentially an action page that is public, so there are no points and we're using a different Apollo client (no auth)
export const LandingPage = () => {
    console.log("hello from landing page")
  const [actionValues, setActionValues] = useState([]);
  //here we're defining a default page route as "landing" so if no pageRoute is provided, we'll use that
  const { artist, page = "landing" } = useParams();
  const {
    data : actionPageData,
    loading: loading,
  }
   = useQuery(gql(getActionPageByArtistAndPageRoute),{
     variables: {artistRoute: artist, pageRoute: page },
     client: PublicClient,
   });

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
    if (actionPageData) {
      const actionArray = actionPageData.ArtistByRoute.items[0].actionPages.items[0].actionButtons.items;
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
  //if the actionPageInfo exists, it should be in this format (assuming a single artist route and page route exist)
  const actionPageInfo = actionPageData.ArtistByRoute.items[0].actionPages.items[0];

  return (
    <ActionPageContainer fluid>
      <StyledContainer fluid>
        <Row>
          <Col className="p-0">
            <ActionStepper currentStep={1}/>
          </Col>
        </Row>
        <BodyContainer>
          <Row className="mb-3">
            <Col>
              <ActionHeader data={actionPageInfo} />
            </Col>
          </Row>
          <ActionButtons
            data={actionPageInfo}
            state={actionValues}
            handleAction={handleAction}
          />
        </BodyContainer>
        {/* TODO need a button here that links to the same artist page but at /secure route */}
      </StyledContainer>
    </ActionPageContainer>
  );
};
