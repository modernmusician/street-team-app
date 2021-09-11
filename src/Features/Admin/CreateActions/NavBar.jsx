import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Icon } from '../../../Components/UI/Icon';
import logo from '../../../assets/mm_square_bright.png';

const NavBarContainer = styled(Nav)({
  display: 'flex',
  alignItems: 'center',
  padding: ({ theme }) => theme.spacing.md,
  background: ({ theme }) => theme.colors.gray3,
  borderBottom: '2px solid gray',
});

const Logo = styled.img({
  width: '42px',
});

const Header = styled.h2({
  fontSize: ({ theme }) => theme.fontSizes.lg,
  fontWeight: ({ theme }) => theme.fontWeights.bold,
  margin: 0,
  padding: 0,
});

export const NavBar = () => {
  return (
    <NavBarContainer defaultActiveKey="/home" as="ul">
      <Logo src={logo} alt="Modern Musician Logo" />
      <Icon name="MdChevronRight" size={45} color="gray" />
      <Header>Create Your Action Card</Header>
    </NavBarContainer>
  );
};
