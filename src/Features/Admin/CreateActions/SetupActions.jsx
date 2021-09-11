import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useGradient } from '../../../Hooks/useGradient';
import { CreateAction } from './CreateAction';

const ActionCard = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
});

const HeaderRow = styled(Card.Body)(({ theme }) => {
  return {
    color: theme.colors.white,
    h3: {
      fontSize: theme.fontSizes.lg,
      fontWeight: theme.fontWeights.bold,
    },
    p: {
      fontSize: theme.fontSizes.xs,
      fontWeight: theme.fontWeights.medium,
      lineHeight: 1.5,
      margin: 0,
    },
  };
});

const SaveButton = styled(Button)(({ theme }) => {
  console.log(useGradient({ color: theme.colors.yellow }));
  return {
    background: theme.colors.yellow,
    color: theme.colors.black,
    width: '100%',
    height: '60px',
    border: 'none',
    borderRadius: 0,
    transition: 'unset !important',
    '&:hover': {
      background: useGradient({ color: theme.colors.yellow }),
      color: theme.colors.black,
    },
  };
});

export const SetupActions = ({ actions }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Set Up Fan Actions</h2>
        </Col>
      </Row>
      <ActionCard fluid>
        <HeaderRow>
          <Row>
            <Col>
              <h3>Fan Actions</h3>
              <p>
                Select &quot;Fan Actions&quot; that someone can take to support
                your music and unlock a free gift
              </p>
            </Col>
          </Row>
        </HeaderRow>
        <Card.Body>
          <Row>
            <Col>
              {actions.map((item, i) => {
                return (
                  <CreateAction
                    key={item.id}
                    isLast={i + 1 === actions.length}
                    {...item}
                  />
                );
              })}
            </Col>
          </Row>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col>
              <SaveButton>Save Action Card</SaveButton>
            </Col>
          </Row>
        </Card.Body>
      </ActionCard>
    </Container>
  );
};

SetupActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      subText: PropTypes.string,
      icon: PropTypes.string,
      isChecked: PropTypes.bool,
      isLast: PropTypes.bool,
      onChangeCheckbox: PropTypes.func,
      inputPlaceholder: PropTypes.string,
      inputValue: PropTypes.string,
      inputOnChange: PropTypes.func,
    })
  ),
};

SetupActions.defaultProps = {
  actions: [],
};
