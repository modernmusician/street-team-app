import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: ({ theme }) => theme.colors.white,
});

const Header = styled.h2({
  fontSize: ({ theme }) => theme.fontSizes.lg,
});

const SubHeader = styled.h3({
  fontSize: ({ theme }) => theme.fontSizes.sm,
});

const Rule = styled.div({
  width: '75%',
  border: ({ theme }) => `1px solid ${theme.colors.white}`,
});

export const ActionHeader = ({ data }) => {
  return (
    <HeaderContainer>
      <Header>{data?.heading}</Header>
      <Rule />
      <SubHeader>{data?.subheading}</SubHeader>
    </HeaderContainer>
  );
};

ActionHeader.propTypes = {
  data: PropTypes.shape({
    getActionPage: PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
    }),
  }).isRequired,
};
