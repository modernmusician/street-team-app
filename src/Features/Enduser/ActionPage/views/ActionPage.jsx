import React from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { listArtists, getActionPage } from '../../../../graphql/queries';
import { ActionButtons } from '../ActionButtons';
import { ActionStepper } from '../ActionStepper';
import { ActionHeader } from '../ActionHeader';
import { ActionTotalPoints } from '../ActionTotalPoints';
import { Spinner } from '../../../../Components/ui/Spinner';

const ActionPageContainer = styled(Container)({
  maxWidth: '480px',
  width: '50%',
  margin: '15px auto'
});

const StyledContainer = styled(Container)({
  margin: 0,
  backgroundColor: ({ theme }) => theme.colors.gray3,
});

const BodyContainer = styled(Container)({
  padding: ({ theme }) => theme.spacing.md,
});

export const ActionPage = () => {
  // const {
  //   data: artistData,
  //   // loading: userLoading,
  //   // error: userError,
  //   // refetch: refectchUserData,
  // } = useQuery(gql(listArtists), {});

  const {
    data: actionPageData,
    loading,
    error,
  } = useQuery(gql(getActionPage), {
    variables: { id: 'cue-no-ego' },
  });

  console.log('actionPageData', actionPageData);
  return (
    <ActionPageContainer>
      {!loading ? (
        <StyledContainer>
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
            <ActionButtons data={actionPageData} />
          </BodyContainer>
          <Row>
            <Col className="p-0">
              <ActionTotalPoints data={actionPageData} />
            </Col>
          </Row>
        </StyledContainer>
      ) : (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Spinner animation="border" role="status" variant="light" />
          </Col>
        </Row>
      )}
    </ActionPageContainer>
  );
};
