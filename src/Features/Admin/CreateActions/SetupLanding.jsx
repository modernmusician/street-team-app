import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const SetupLanding = ({ ...props }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Your Landing Page</h2>
        </Col>
      </Row>
    </Container>
  );
};
