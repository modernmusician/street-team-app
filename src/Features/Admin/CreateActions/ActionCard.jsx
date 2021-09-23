import React from 'react';
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
    h4: {
      marginLeft: theme.spacing.sm,
      color: theme.colors.primary,
      fontSize: theme.fontSizes.md,
    },
  };
});

export const ActionCard = () => {
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
            <Icon name="MdEdit" color={theme.colors.primary} size={20} />
            <h4>Setup Fan Actions</h4>
          </Actions>
        </Row>
        {/* <Row>
          <Actions>
            <Icon name="MdEdit" color={theme.colors.primary} size={20} />
            <h4>Setup Landing Page</h4>
          </Actions>
        </Row> */}
      </ActionContainer>
    </Container>
  );
};
