import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '../../../Components/UI/Icon';
import { Checkbox } from '../../../Components/UI/Checkbox';
import { TextField } from '../../../Components/UI/TextField';

const CreateActionContainer = styled(Container)({
  border: '1px solid',
  borderColor: ({ theme }) => theme.colors.gray,
  padding: ({ theme }) => theme.spacing.lg,
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const CreateAction = () => {
  const [checked, setChecked] = useState(true);
  const [textValue, setTextValue] = useState('asdfasdf');
  const handleCheckBoxChange = e => {
    setChecked(e.target.checked);
  };
  const handleInpuChange = e => {
    setTextValue(e.target.value);
  };

  return (
    <CreateActionContainer>
      <Row>
        <Col>
          <Checkbox
            label="Join the VIP Group"
            subText="Get More Street Team Members..."
            checked={checked}
            onChange={handleCheckBoxChange}
          />
        </Col>
        <IconContainer>
          <Icon name="MdLibraryMusic" color="white" />
        </IconContainer>
      </Row>
      {checked && (
        <Row>
          <Col>
            <TextField
              value={textValue}
              onChange={handleInpuChange}
              placeholder="Enter Street Team Group URL"
            />
          </Col>
        </Row>
      )}
    </CreateActionContainer>
  );
};
