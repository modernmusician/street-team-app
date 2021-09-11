import React from 'react';
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

export const SetupActions = () => {
  const actions = [
    {
      label: 'Join the VIP Group',
      subText: 'Get More Street Team Members...',
      icon: 'MdGroup',
      isChecked: true,
      onChangeCheckbox: () => {},
      inputPlaceholder: 'Enter Street Team Group URL',
      inputValue: '',
      inputOnChange: () => {},
    },
    {
      label: 'Follow My Music',
      subText: 'Get More Music Followers...',
      icon: 'MdLibraryMusic',
      isChecked: true,
      onChangeCheckbox: () => {},
      inputPlaceholder: 'Enter Follow Music URL',
      inputValue: '',
      inputOnChange: () => {},
    },
    {
      label: 'Send Me An Email',
      subText: 'Get Emails From Fans...',
      icon: 'MdEmail',
      isChecked: true,
      onChangeCheckbox: () => {},
      inputPlaceholder: 'Enter Your Email Address',
      inputValue: '',
      inputOnChange: () => {},
    },
    {
      label: 'Claim Your Free Started Pack',
      subText: 'Get More Starter Pack Sales...',
      icon: 'FaGift',
      isChecked: true,
      onChangeCheckbox: () => {},
      inputPlaceholder: 'Enter Starter Pack URL',
      inputValue: '',
      inputOnChange: () => {},
    },
  ];

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
                    key={item.label}
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
