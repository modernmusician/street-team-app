import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { ActionPage } from '../../../Components/ActionPage';

export const Preview = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Preview</h2>
        </Col>
      </Row>
      <ActionPage style={{ marginTop: 0 }}>
        <Row>
          <Col className="p-0">
            <ActionPage.Stepper currentStep={2} />
          </Col>
        </Row>
        <ActionPage.Body>
          <Row className="mb-3">
            <Col>
              <ActionPage.Header
                heading="Welcome To The Community!"
                subHeading="Please take 2 mins to complete the following steps"
              />
            </Col>
          </Row>
          {/* <ActionPage.Buttons
          data={actionPageInfo}
          state={actionValues}
          handleAction={handleAction}
        /> */}
        </ActionPage.Body>
        <Row>
          <Col className="p-0">
            <ActionPage.TotalPoints totalPoints={0} />
          </Col>
        </Row>
      </ActionPage>
    </Container>
  );
};
