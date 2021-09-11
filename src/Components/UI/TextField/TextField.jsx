import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const Input = styled(Form.Control)({
  color: ({ theme }) => theme.colors.white,
  borderRadius: 0,
  borderColor: ({ theme }) => theme.colors.gray,
  background: 'transparent',
  height: '48px',
  fontSize: ({ theme }) => theme.fontSizes.sm,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
  transitions: 'unset',
  '&:hover': {
    background: 'transparent',
    color: ({ theme }) => theme.colors.white,
  },
  '&:active': {
    background: 'transparent',
    color: ({ theme }) => theme.colors.white,
  },
  '&:focus': {
    background: 'transparent',
    color: ({ theme }) => theme.colors.white,
  },
});

const InputLabel = styled(Form.Label)({
  color: ({ theme }) => theme.colors.white,
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontFamily: ({ theme }) => theme.fonts.heading,
  fontWeight: ({ theme }) => theme.fontWeights.medium,
});

const SubText = styled(Form.Text)({
  fontSize: ({ theme }) => theme.fontSizes.sm,
  margin: 0,
});

const FormGroup = styled(Form.Group)({
  margin: 0,
  padding: 0,
});

export const TextField = ({ label, subText, placeholder, value, onChange }) => {
  return (
    <FormGroup controlId="formBasicEmail">
      <InputLabel>{label}</InputLabel>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {subText && <SubText className="text-muted">{subText}</SubText>}
    </FormGroup>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  subText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  subText: null,
  value: null,
  placeholder: null,
};
