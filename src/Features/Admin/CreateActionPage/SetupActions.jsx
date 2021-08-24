import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const SetupActions = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Set Up Fan Actions</h2>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <h3>Fan Actions</h3>
            <p>
              Select &quot;Fan Actions&quot; that someone can take to support
              your music and unlock a free gift
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Setup Fan Actions</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <button type="button">Save Action Card</button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
