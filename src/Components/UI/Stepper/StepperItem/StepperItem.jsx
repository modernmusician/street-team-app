import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: ({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.gray1,
  minWidth: '30px',
  height: '30px',
  color: ({ theme }) => theme.colors.white,
  fontWeigth: ({ theme }) => theme.fontWeights.bold,
});

export const StepperItem = ({ isActive, step }) => {
  return <Item isActive={isActive}>{step}</Item>;
};

StepperItem.propTypes = {
  isActive: PropTypes.bool,
  step: PropTypes.string,
};

StepperItem.defaultProps = {
  isActive: true,
  step: null,
};
