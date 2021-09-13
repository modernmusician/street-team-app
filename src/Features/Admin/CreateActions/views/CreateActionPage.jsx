import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Spinner } from '../../../../Components/UI/Spinner';
import { ActionCard } from '../ActionCard';
import { NavBar } from '../NavBar';
import { Preview } from '../Preview';
import { SetupActions } from '../SetupActions';
import { useGetActionPage } from '../hooks/useGetActionPage';
import { selectActionsConfig } from '../configs/actionsConfig';

const RootContainer = styled(Container)({
  background: ({ theme }) => theme.colors.black,
  marginTop: ({ theme }) => theme.spacing.xl,
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
                actions={selectActionsConfig}
                onChangeCheckbox={onChangeCheckbox}
                onChangeInput={onChangeInput}
                actionChecked={actionChecked}
                actionValue={actionValue}
              />
            </Col>
            <Col>
              <Preview
                actionChecked={actionChecked}
                actionValue={actionValue}
              />
            </Col>
          </Row>
        </Container>
      </RootContainer>
    </div>
  );
};
