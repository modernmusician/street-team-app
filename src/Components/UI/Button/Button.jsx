import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import styled from 'styled-components';

const StyledButton = styled(BootstrapButton)({
  '&:hover': {
    color: 'inherit',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: 'inherit',
    '&:hover': {
      color: 'inherit',
    },
  },
});

export const Button = ({ ...props }) => {
  return <StyledButton {...props} />;
};
