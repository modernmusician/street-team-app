import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionCard } from '../ActionCard';
import { NavBar } from '../NavBar';
import { Preview } from '../Preview';
import { SetupActions } from '../SetupActions';
import { useGetActionPage } from '../hooks/useGetActionPage';

const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  marginBottom: ({ theme }) => theme.spacing.xl,
  height: '100%',
});

export const CreateActionPage = () => {
  const { loading, actionPageId, artistRoute } = useGetActionPage();

  if (loading)
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ textAlign: 'center' }}>
            <Spinner animation="border" role="status" variant="light" />
          </Col>
        </Row>
      </Container>
    );

  return (
    <div>
      <NavBar />
      <RootContainer fluid>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <ActionCard />
            </Col>
            <Col>
              <SetupActions
                actionPageId={actionPageId}
                artistRoute={artistRoute}
              />
            </Col>
            <Col>
              <Preview />
            </Col>
          </Row>
        </Container>
      </RootContainer>
    </div>
  );
};
