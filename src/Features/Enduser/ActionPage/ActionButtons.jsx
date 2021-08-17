import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { ActionButton } from '../../../Components/ui/ActionButton';
import { compareId } from '../../../utils/sharedUtils';

const StyledContainer = styled.div({
  button: { marginBottom: '15px' },
});

export const ActionButtons = ({ data, state, handleAction }) => {
  const actionButtons = [...data.getActionPage.actionButtons.items].sort(
    compareId('position')
  );
  return (
    <StyledContainer>
      {actionButtons.map(item => {
        return (
          <Row key={item.id}>
            <Col>
              <ActionButton
                {...item}
                state={state}
                handleAction={handleAction}
              />
            </Col>
          </Row>
        );
      })}
    </StyledContainer>
  );
};

ActionButtons.propTypes = {
  data: PropTypes.shape({
    getActionPage: PropTypes.shape({
      actionButtons: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({})),
      }),
    }),
  }).isRequired,
  state: PropTypes.shape({}).isRequired,
  handleAction: PropTypes.func.isRequired,
};
