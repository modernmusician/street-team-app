import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { ActionButton } from '../../../Components/ui/ActionButton';
import { compareId } from '../../../utils/sharedUtils';

const StyledContainer = styled.div({
  button: { marginBottom: '15px' },
});

export const ActionButtons = ({ data }) => {
  const actionButtons = [...data.getActionPage.actionButtons.items].sort(
    compareId('position')
  );
  return (
    <StyledContainer>
      {actionButtons.map((item, i) => {
        return (
          <Row>
            <Col>
              <ActionButton key={i} {...item} />
            </Col>
          </Row>
        );
      })}
    </StyledContainer>
  );
};
