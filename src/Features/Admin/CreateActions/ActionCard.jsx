import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
  padding: ({ theme }) => theme.spacing.md,
});

const ListContainer = styled.div(({ theme, isActive }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    h3: {
      marginLeft: theme.spacing.sm,
      color: isActive ? theme.colors.primary : theme.colors.white,
      fontWeight: theme.fontWeights.bold,
    },
  };
});

const Actions = styled.div(({ theme, isActive }) => {
  return {
    color: isActive ? theme.colors.primary : theme.colors.white,
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing.lg,
    marginTop: theme.spacing.sm,
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
    color: 'inherit',
    fontSize: theme.fontSizes.lg,
    borderBottom: isActive
      ? `4px solid ${theme.colors.primary}`
      : '4px solid transparent',
    svg: {
      marginRight: theme.spacing.sm,
    },
  };
});

export const ActionCard = ({ activeView }) => {
  const history = useHistory();
  const theme = useTheme();
  const isActionActive = activeView === 'action';
  const isLandingActive = activeView === 'landing';

  return (
    <Container>
      <Row>
        <Col>
          <h2>Create Your Fan Funnel</h2>
        </Col>
      </Row>
      <ActionContainer>
        <Row>
          <Col>
            <ListContainer isActive={isActionActive}>
              <Icon
                name="FaTrophy"
                color={
                  isActionActive ? theme.colors.primary : theme.colors.white
                }
                size={45}
              />
              <h3>Fan Actions</h3>
            </ListContainer>
            <Actions isActive={isActionActive}>
              <Button
                isActive={isActionActive}
                onClick={() => history.push('/admin/create-action-page')}
              >
                <Icon
                  name="FaEdit"
                  color={
                    isActionActive ? theme.colors.primary : theme.colors.white
                  }
                  size={20}
                />
                Setup Fan Actions
              </Button>
            </Actions>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col>
            <ListContainer isActive={isLandingActive}>
              <Icon
                name="FaMagnet"
                color={
                  isLandingActive ? theme.colors.primary : theme.colors.white
                }
                size={45}
              />
              <h3>Fan Magnet</h3>
            </ListContainer>
            <Actions isActive={isLandingActive}>
              <Button
                isActive={activeView === 'landing'}
                onClick={() => history.push('/admin/create-landing-page')}
              >
                <Icon
                  name="FaEdit"
                  color={
                    isLandingActive ? theme.colors.primary : theme.colors.white
                  }
                  size={20}
                />
                Setup Fan Magnet
              </Button>
            </Actions>
          </Col>
        </Row>
      </ActionContainer>
    </Container>
  );
};

ActionCard.propTypes = {
  activeView: PropTypes.string,
};

ActionCard.defaultProps = {
  activeView: 'action',
};
