import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '../../../Components/UI/Icon';

const CreateActionContainer = styled(Container)({
  border: '1px solid',
  borderColor: ({ theme }) => theme.colors.white,
  padding: ({ theme }) => theme.spacing.lg,
});

const SubText = styled.p({
  fontSize: ({ theme }) => theme.fontSizes.sm,
  margin: 0,
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const CheckboxLabel = styled.label({
  color: ({ theme }) => theme.colors.white,
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
  'input[type=checkbox]': {
    marginRight: ({ theme }) => theme.spacing.md,
  },
});

export const CreateAction = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = e => {
    setChecked(e.target.checked);
  };

  return (
    <CreateActionContainer>
      <Row>
        <Col>
          <CheckboxLabel htmlFor="vip">
            <input
              type="checkbox"
              id="vip"
              onChange={handleChange}
              checked={checked}
            />
            Join the VIP Group
          </CheckboxLabel>
          <SubText>Get More Street Team Members...</SubText>
        </Col>
        <IconContainer>
          <Icon name="MdLibraryMusic" color="white" />
        </IconContainer>
      </Row>
      {checked && (
        <Row>
          <Col>
            <input type="text" placeholder="Enter Street Team Group URL" />
          </Col>
        </Row>
      )}
    </CreateActionContainer>
  );
};
