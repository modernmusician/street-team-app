import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
  padding: ({ theme }) => theme.spacing.md,
});

const ListContainer = styled(Col)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    h3: {
      marginLeft: theme.spacing.sm,
      color: theme.colors.white,
      fontWeight: theme.fontWeights.bold,
    },
  };
});

const Actions = styled(Col)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  };
});

const Button = styled.button(({ theme, isActive }) => {
  console.log('isActive', isActive);
  return {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    background: 'transparent',
    marginLeft: theme.spacing.sm,
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    borderBottom: isActive
      ? `4px solid ${theme.colors.primary}`
      : '4px solid transparent',
    svg: {
      marginRight: theme.spacing.sm,
    },
  };
});

export const ActionCard = ({ activeView, setActiveView }) => {
  const theme = useTheme();

  return (
    <Container>
      <Row>
        <Col>
          <h2>Your Action Card</h2>
        </Col>
      </Row>
      <ActionContainer>
        <Row>
          <ListContainer>
            <Icon name="FaTrophy" color={theme.colors.white} size={45} />
            <h3>Create Fan Actions</h3>
          </ListContainer>
        </Row>
        <Row>
          <Actions>
            <Button
              isActive={activeView === 'action'}
              onClick={() => setActiveView('action')}
            >
              <Icon name="FaList" color={theme.colors.white} size={20} />
              Setup Fan Actions
            </Button>
          </Actions>
        </Row>
        <Row>
          <Actions>
            <Button
              isActive={activeView === 'landing'}
              onClick={() => setActiveView('landing')}
            >
              <Icon name="FaTicketAlt" color={theme.colors.white} size={20} />
              Setup Landing Page
            </Button>
          </Actions>
        </Row>
      </ActionContainer>
    </Container>
  );
};

ActionCard.propTypes = {
  activeView: PropTypes.string,
  setActiveView: PropTypes.func,
};

ActionCard.defaultProps = {
  activeView: 'action',
  setActiveView: () => {},
};
