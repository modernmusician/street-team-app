import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      {actionButtons.map((item) => {
        return (
          <Row key={item.id}>
            <Col>
              <ActionButton {...item} state={state} handleAction={handleAction}/>
            </Col>
          </Row>
        );
      })}
    </StyledContainer>
  );
};
