import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';
import { ActionPage } from '../../../Components/ActionPage';
import { useTheme } from '../../../Hooks/useTheme';
import { apiActionsConfig } from './configs/actionsConfig';
import { compareId } from '../../../utils/sharedUtils';

const filteredActions = actionChecked => {
  const activeActions = [];
  Object.keys(actionChecked).forEach(key => {
    if (actionChecked[key]) {
      activeActions.push(apiActionsConfig[key]);
    }
  });
  return activeActions.sort(compareId('position'));
};

export const PreviewActions = ({ actionChecked }) => {
  const actions = filteredActions(actionChecked);
  const theme = useTheme();

  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ fontSize: theme.fontSizes.lg }}>Preview</h2>
        </Col>
      </Row>
      <ActionPage style={{ margin: 0 }}>
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
          {actions.length > 0 && <ActionPage.Buttons data={actions} />}
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

PreviewActions.propTypes = {
  actionChecked: PropTypes.shape({}),
};

PreviewActions.defaultProps = {
  actionChecked: {},
};
