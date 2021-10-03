import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';
import { useGradient } from '../../../Hooks/useGradient';

const StyledButton = styled(BootstrapButton)(({ theme, isActive }) => {
  console.log('isActive', isActive);
  return {
    background: theme.colors.yellow,
    color: theme.colors.black,
    width: '100%',
    height: '60px',
    border: 'none',
    borderRadius: 0,
    transition: 'unset !important',
    '&:hover': {
      background: useGradient({ color: theme.colors.yellow }),
      color: theme.colors.black,
    },
    '&:focus': {
      background: useGradient({ color: theme.colors.yellow }),
      color: theme.colors.black,
    },
  };
});

export const Button = ({ label, children, ...props }) => {
  return <StyledButton {...props}>{label || children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  label: null,
};
