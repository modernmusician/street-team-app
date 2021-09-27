import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const ActionPageContainer = styled(Container)({
  maxWidth: '450px',
  margin: '15px auto',
  backgroundColor: ({ theme }) => theme.colors.gray3,
});

export const ActionPage = ({ children, ...props }) => {
  return <ActionPageContainer {...props}>{children}</ActionPageContainer>;
};

ActionPage.propTypes = {
  children: PropTypes.node.isRequired,
};
