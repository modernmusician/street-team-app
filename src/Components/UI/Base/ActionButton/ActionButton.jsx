import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ActionButtonContainer = styled(Button)(props => {
  console.log(props);
  return {
    height: '75px',
    width: '100%',
    borderRadius: '0px',
    backgroundColor: 'yellow',
  };
});

export const ActionButton = ({ color, children }) => {
  return (
    <ActionButtonContainer color={color}>{children}</ActionButtonContainer>
  );
};

ActionButton.propTypes = {
  // icon: PropTypes.node,
  color: PropTypes.string,
  children: PropTypes.node,
};

ActionButton.defaultProps = {
  // icon: null,
  color: 'blue',
  children: null,
};
