import React from 'react';
import Row from 'react-bootstrap/Row';
import { ActionButton } from '../../../Components/UI/ActionButton';
import { compareId } from '../../../utils/sharedUtils';

export const ActionButtons = ({ data }) => {
  const actionButtons = [...data.getActionPage.actionButtons.items].sort(
    compareId('position')
  );
  return (
    <Row>
      {actionButtons.map((item, i) => {
        return <ActionButton key={i} {...item} />;
      })}
    </Row>
  );
};
