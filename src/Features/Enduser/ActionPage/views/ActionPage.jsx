import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getActionPage } from '../../../../graphql/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionStepper } from '../ActionStepper';
import { ActionHeader } from '../ActionHeader';
import { ActionTotalPoints } from '../ActionTotalPoints';
import { Spinner } from '../../../../Components/UI/Spinner';

const ActionPageContainer = styled(Container)({
  maxWidth: '450px',
  margin: '15px auto',
});

const StyledContainer = styled(Container)({
  margin: 0,
  backgroundColor: ({ theme }) => theme.colors.gray3,
});

const BodyContainer = styled(Container)({
  padding: ({ theme }) => theme.spacing.md,
});

export const ActionPage = () => {
  const [actionValues, setActionValues] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const { artist } = useParams();
  // const {
  //   data: artistData,
  //   // loading: userLoading,
  //   // error: userError,
  //   // refetch: refectchUserData,
  // } = useQuery(gql(listArtists), {});

  const {
    data: actionPageData,
    loading,
    // error,
  } = useQuery(gql(getActionPage), {
    variables: { id: artist },
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
    let total = 0;
    for (let i = 0; i < actionValues.length; i++) {
      const element = actionValues[i];
      if (element.complete) {
        total += element.points;
      }
    }
    setTotalPoints(total);
  }, [actionValues]);

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
            <ActionStepper />
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
        <Row>
          <Col className="p-0">
            <ActionTotalPoints totalPoints={totalPoints} />
          </Col>
        </Row>
      </StyledContainer>
    </ActionPageContainer>
  );
};
