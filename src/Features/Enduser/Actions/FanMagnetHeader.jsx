import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const MagnetHeader = styled.div`
  font-size: 50px;
  text-align: center;
  padding: 20px 0;
`;

export const FanMagnetHeader = ({ children, className }) => {
  return <MagnetHeader className={className}>{children}</MagnetHeader>;
};

FanMagnetHeader.defaultProps = {
  className: '',
};

FanMagnetHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
};
