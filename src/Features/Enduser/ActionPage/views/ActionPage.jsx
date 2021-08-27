import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/react-hooks';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom';
import { getActionPageByArtistAndPageRoute} from '../../../../graphql-custom/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionStepper } from '../ActionStepper';
import { ActionHeader } from '../ActionHeader';
import { ActionTotalPoints } from '../ActionTotalPoints';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionPageContainer, StyledContainer, BodyContainer } from '../ActionPageContainer';

export const ActionPage = () => {
  const [actionValues, setActionValues] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const { artist, page = "join"} = useParams();
  console.log(`page variable is ${page}`)
  const {
    data : actionPageData,
    loading: loading,
  }
   = useQuery(gql(getActionPageByArtistAndPageRoute),{
     variables: {artistRoute: artist, pageRoute: page }
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
      // this is currently assuming that 1) artist exsists at this route & 2) only one action page exists at this page route
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

  const actionPageInfo = actionPageData.ArtistByRoute.items[0].actionPages.items[0];
  console.log(`actionPage info is`);
  console.log(actionPageInfo);

  return (
    <ActionPageContainer fluid>
      <StyledContainer fluid>
        <Row>
          <Col className="p-0">
            <ActionStepper currentStep={2}/>
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
        <Row>
          <Col className="p-0">
            <ActionTotalPoints totalPoints={totalPoints} />
          </Col>
        </Row>
      </StyledContainer>
    </ActionPageContainer>
  );
};
