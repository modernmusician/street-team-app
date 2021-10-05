import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.black,
  padding: ({ theme }) => theme.spacing.md,
  border: 'none',
});

const ListContainer = styled.div(({ theme, isActive }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    h3: {
      marginLeft: theme.spacing.sm,
      color: isActive ? theme.colors.menuPrimary : theme.colors.white,
      fontWeight: theme.fontWeights.bold,
    },
    svg: {
      marginRight: theme.spacing.md,
    },
  };
});

const Actions = styled.div(({ theme, isActive }) => {
  return {
    color: isActive ? theme.colors.menuPrimary : theme.colors.white,
    display: 'flex',
    alignItems: 'center',
    marginLeft: 80,
    marginTop: theme.spacing.md,
  };
});

const Button = styled.button(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    fontSize: theme.fontSizes.lg,
    svg: {
      marginRight: theme.spacing.lg,
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
          <h2 style={{ fontSize: theme.fontSizes.lg }}>
            Create Your Fan Funnel
          </h2>
          <p style={{ fontSize: theme.fontSizes.sm }}>Build Your Audience</p>
        </Col>
      </Row>
      <ActionContainer>
        <Row>
          <Col>
            <Button
              isActive={activeView === 'landing'}
              onClick={() => history.push('/admin/create-fan-magnet')}
            >
              <ListContainer isActive={isLandingActive}>
                <Icon
                  name="FaMagnet"
                  color={
                    isLandingActive ? theme.colors.menuPrimary : theme.colors.white
                  }
                  size={45}
                />
                <h3>Fan Magnet</h3>
              </ListContainer>
              <Actions isActive={isLandingActive}>
                <Icon
                  name="FaEdit"
                  color={
                    isLandingActive ? theme.colors.menuPrimary : theme.colors.white
                  }
                  size={20}
                />
                <h4>Set Up Fan Magnet</h4>
              </Actions>
            </Button>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col>
            <Button
              isActive={isActionActive}
              onClick={() => history.push('/admin/create-accelerator')}
            >
              <ListContainer isActive={isActionActive}>
                <Icon
                  name="MdSpeed"
                  color={
                    isActionActive ? theme.colors.menuPrimary : theme.colors.white
                  }
                  size={45}
                />
                <h3>Tribal Accelerator</h3>
              </ListContainer>
              <Actions isActive={isActionActive}>
                <Icon
                  name="FaEdit"
                  color={
                    isActionActive ? theme.colors.menuPrimary : theme.colors.white
                  }
                  size={20}
                />
                <h4>Set Up Your Actions</h4>
              </Actions>
            </Button>
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
