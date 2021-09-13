import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { ActionButton } from '../../UI/ActionButton';
import { compareId } from '../../../utils/sharedUtils';

const StyledContainer = styled.div({
  button: { marginBottom: '15px' },
});

export const ActionButtons = ({ data, state, handleAction }) => {
  const actionButtons = [...data].sort(compareId('position'));
  return (
    <StyledContainer>
      {actionButtons.map((item, i) => {
        return (
          <Row key={item?.id || i}>
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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  state: PropTypes.arrayOf(PropTypes.shape({})),
  handleAction: PropTypes.func,
};

ActionButtons.defaultProps = {
  state: null,
  handleAction: () => {},
};
