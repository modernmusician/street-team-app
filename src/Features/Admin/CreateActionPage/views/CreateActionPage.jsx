import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ActionCard } from '../ActionCard';
import { NavBar } from '../NavBar';
import { Preview } from '../Preview';
import { SetupActions } from '../SetupActions';
import { useGetActionPage } from '../hooks/useGetActionPage';

export const CreateActionPage = () => {
  const test = useGetActionPage();
  console.log('test', test);
  return (
    <React.Fragment>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <ActionCard />
          </Col>
          <Col>
            <SetupActions />
          </Col>
          <Col>
            <Preview />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
