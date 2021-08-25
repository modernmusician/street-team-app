// landing page is the same as an action page, except that there's no login required
// use case is primarily for a landing page which would lead a user to an ActionPage
import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom';
import { getActionPage } from '../../../../graphql/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionStepper } from '../ActionStepper';
import { ActionHeader } from '../ActionHeader';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionPageContainer, StyledContainer, BodyContainer } from '../ActionPageContainer';
import { PublicClient } from '../../../../Components/ApolloProvider/PublicClient';

export const LandingPage = () => {
  const [actionValues, setActionValues] = useState([]);
  const { artist } = useParams();

  const {
    data: actionPageData,
    loading,
    // error,
  } = useQuery(gql(getActionPage), {
    variables: { id: artist },
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
      const actionArray = actionPageData.getActionPage.actionButtons.items;
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
              <ActionHeader data={actionPageData} />
            </Col>
          </Row>
          <ActionButtons
            data={actionPageData}
            state={actionValues}
            handleAction={handleAction}
          />
        </BodyContainer>
        {/* TODO need a button here that links to the same artist page but at /secure route */}
      </StyledContainer>
    </ActionPageContainer>
  );
};
