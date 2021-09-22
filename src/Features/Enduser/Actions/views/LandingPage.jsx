// landing page is the same as an action page, except that there's no login required
// use case is primarily for a landing page which would lead a user to an ActionPage
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/react-hooks';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getActionPageByArtistAndPageRoute } from '../../../../graphql-custom/queries';
import { Icon, FanMagnetButton, Spinner } from '../../../../Components/UI';
import { PublicClient } from '../../../../Components/ApolloProvider/PublicClient';
import { PlayWidget } from '../../../../Components/UI/Integrations/SoundCloud/PlayWidget';
import { FanMagnetStep2 } from './FanMagnetStep2';
import {
  PageContainer,
  PageHeader,
  StyledPageContainer,
} from '../../../../Components/Page';

const PlayerContainer = styled.div`
  padding: 20px 0;
`;

// landing page is essentially an action page that is public, so there are no points and we're using a different Apollo client (no auth)
export const LandingPage = () => {
  const [soundCloudURL, setSoundCloudURL] = useState('');
  const [continueButtonDetails, setContineButtonDetails] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isButtonActive, setIsButtonActive] = useState(false);

  // here we're defining a default page route as "landing" so if no pageRoute is provided, we'll use that
  const { artist, page = 'landing' } = useParams();
  const { data: actionPageData, loading } = useQuery(
    gql(getActionPageByArtistAndPageRoute),
    {
      variables: { artistRoute: artist, pageRoute: page },
      client: PublicClient,
    }
  );

  useEffect(() => {
    if (actionPageData) {
      const soundCloudAction =
        actionPageData.ArtistByRoute.items[0].actionPages.items[0].actionButtons.items.find(
          item => item.serviceAction === 'SoundCloudEmbed'
        );
      if (soundCloudAction) {
        setSoundCloudURL(soundCloudAction.targetURL);
      }
      const continueButton =
        actionPageData.ArtistByRoute.items[0].actionPages.items[0].actionButtons.items.find(
          item => item.serviceAction === 'ContinueButton'
        );
      if (continueButton) {
        setContineButtonDetails(continueButton);
      }
    }
  }, [actionPageData]);

  useEffect(() => {
    const timer = setTimeout(() => setIsButtonActive(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <StyledPageContainer>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" style={{ textAlign: 'center' }}>
              <Spinner animation="border" role="status" variant="light" />
            </Col>
          </Row>
        </Container>
      </StyledPageContainer>
    );
  // if the actionPageInfo exists, it should be in this format (assuming a single artist route and page route exist)

  if (!actionPageData || actionPageData?.ArtistByRoute?.items?.length === 0) {
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

  return (
    <PageContainer>
      {currentStep === 1 && (
        <React.Fragment>
          <PageHeader>{actionPageInfo.heading}</PageHeader>
          <PlayerContainer>
            <PlayWidget sourceUrl={soundCloudURL} />
          </PlayerContainer>
          <FanMagnetButton
            active={isButtonActive}
            activeBgColor={continueButtonDetails.backgroundColor || '#807650'}
            activeColor={continueButtonDetails.textColor || '#202021'}
            inactiveBgColor="#544c2e"
            margin="60px 0 45px"
            handleClick={() => setCurrentStep(2)}
          >
            <span>
              <Icon
                color="#202021"
                name={continueButtonDetails.buttonIcon || 'Gift'}
                size={70}
              />
            </span>
            <div>
              {continueButtonDetails.preActionText || 'CLAIM YOUR FREE GIFT'}
            </div>
          </FanMagnetButton>
        </React.Fragment>
      )}
      {currentStep === 2 && <FanMagnetStep2 />}
    </PageContainer>
  );
};
