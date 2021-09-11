import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionCard } from '../ActionCard';
import { NavBar } from '../NavBar';
import { Preview } from '../Preview';
import { SetupActions } from '../SetupActions';
import { useGetActionPage } from '../hooks/useGetActionPage';

const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  marginBottom: ({ theme }) => theme.spacing.xl,
  height: '100%',
});

export const CreateActionPage = () => {
  const { loading, actionPageId, artistRoute } = useGetActionPage();
  const [actionChecked, setActionChecked] = useState({});
  const [actionValue, setActionValue] = useState({});

  const onChangeCheckbox = id => {
    setActionChecked({
      ...actionChecked,
      [id]: !actionChecked[id],
    });
  };

  const onChangeInput = (e, id) => {
    setActionValue({
      ...actionValue,
      [id]: e.target.value,
    });
  };

  console.log(actionValue, actionChecked);

  const actions = [
    {
      id: 'vip',
      label: 'Join the VIP Group',
      subText: 'Get More Street Team Members...',
      icon: 'MdGroup',
      isChecked: actionChecked?.vip,
      onChangeCheckbox: () => onChangeCheckbox('vip'),
      inputPlaceholder: 'Enter Street Team Group URL',
      inputValue: actionValue?.vip,
      inputOnChange: e => onChangeInput(e, 'vip'),
    },
    {
      id: 'follow',
      label: 'Follow My Music',
      subText: 'Get More Music Followers...',
      icon: 'MdLibraryMusic',
      isChecked: actionChecked?.follow,
      onChangeCheckbox: () => onChangeCheckbox('follow'),
      inputPlaceholder: 'Enter Follow Music URL',
      inputValue: actionValue?.vip,
      inputOnChange: e => onChangeInput(e, 'follow'),
    },
    {
      id: 'email',
      label: 'Send Me An Email',
      subText: 'Get Emails From Fans...',
      icon: 'MdEmail',
      isChecked: actionChecked?.email,
      onChangeCheckbox: () => onChangeCheckbox('email'),
      inputPlaceholder: 'Enter Your Email Address',
      inputValue: actionValue?.vip,
      inputOnChange: e => onChangeInput(e, 'email'),
    },
    {
      id: 'started',
      label: 'Claim Your Free Started Pack',
      subText: 'Get More Starter Pack Sales...',
      icon: 'FaGift',
      isChecked: actionChecked?.started,
      onChangeCheckbox: () => onChangeCheckbox('started'),
      inputPlaceholder: 'Enter Starter Pack URL',
      inputValue: actionValue?.vip,
      inputOnChange: e => onChangeInput(e, 'started'),
    },
  ];

  if (loading)
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{ textAlign: 'center' }}>
            <Spinner animation="border" role="status" variant="light" />
          </Col>
        </Row>
      </Container>
    );

  return (
    <div>
      <NavBar />
      <RootContainer fluid>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <ActionCard />
            </Col>
            <Col>
              <SetupActions
                actionPageId={actionPageId}
                artistRoute={artistRoute}
                actions={actions}
              />
            </Col>
            <Col>
              <Preview />
            </Col>
          </Row>
        </Container>
      </RootContainer>
    </div>
  );
};
