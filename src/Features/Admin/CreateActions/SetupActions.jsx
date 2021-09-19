/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useGradient } from '../../../Hooks/useGradient';
// import { apiActionsConfig } from './configs/actionsConfig';
// import { compareId } from '../../../utils/sharedUtils';
import { gql, useQuery, useMutation } from '@apollo/react-hooks';
import {
  updateActionPageButton,
  createActionPageButton,
} from '../../../graphql/mutations';
import { getActionPage } from '../../../graphql/queries';
import { apiActionsConfig } from './configs/actionsConfig';
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
    '&:focus': {
      background: useGradient({ color: theme.colors.yellow }),
      color: theme.colors.black,
    },
  };
});

export const SetupActions = ({
  actions,
  onChangeCheckbox,
  onChangeInput,
  actionChecked,
  actionValue,
  actionPageId,
  artistRoute,
}) => {
  console.log('actionPageId', actionPageId);
  const {
    data: pageData,
    loading: pageDataLoading,
    error: pageDataError,
  } = useQuery(gql(getActionPage), { variables: { id: actionPageId } });

  const [updateActionButton] = useMutation(gql(updateActionPageButton));

  const [addActionPageButton, { loading: loadingActionPage }] = useMutation(
    gql(createActionPageButton),
    {
      refetchQueries: [
        { query: gql(getActionPage), variables: { id: actionPageId } },
      ],
      awaitRefetchQueries: false,
    }
  );

  const onSubmit = () => {
    console.log('actionChecked, actionValue', actionChecked, actionValue);
    console.log('IDS', actionPageId, artistRoute);
    console.log('create or update called');
    console.log('actionValue, actionPageId', actionChecked, actionValue);
    let newTargetUrl = '';
    console.log('check', actionValue?.email && actionChecked?.email);
    // handle sendEmailUrl
    if (actionValue?.email && actionChecked?.email) {
      const emailUrl = `mailto:${actionValue.email}?subject=I%20joined%20the%20team!&body=Hey!%20I%20just%20joined%20the%20team!%0A%0A%20Here's%20where%20I'm%20from%20and%20why%20I'm%20interested%20in%20being%20a%20part%20of%20the%20community...`;
      let recordExists = false;
      console.log(pageData);
      const inputVariables = {
        ...apiActionsConfig.email,
        actionPageID: actionPageId,
        targetURL: emailUrl,
      };
      console.log('inputVariables', inputVariables);
      if (pageData) {
        // if the action buttons exist in the pageData, update them
        if (pageData?.getActionPage) {
          const emailButton = pageData.getActionPage.actionButtons.items.find(
            element => element.buttonIcon === 'Email'
          );
          if (emailButton) {
            console.log('updating the email button');
            // update  the button
            inputVariables.id = emailButton.id;
            updateActionButton({
              variables: {
                input:
                  // id:emailButton.id,
                  // targetURL:actionValue.sendEmailUrl,
                  inputVariables,
              },
            });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists) {
          console.log('creating a new button');
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
        console.log('we did it!');
      }
    }
    // handle joinGroupUrl
    if (actionValue?.vipGroup && actionChecked?.vipGroup) {
      newTargetUrl = actionValue.vipGroup;
      let recordExists = false;
      const inputVariables = {
        ...apiActionsConfig.vipGroup,
        actionPageID: actionPageId,
        targetURL: newTargetUrl,
      };
      if (pageData) {
        // if the action buttons exist in the pageData, update the button
        if (pageData?.getActionPage) {
          const button = pageData.getActionPage.actionButtons.items.find(
            element => element.buttonIcon === 'Group'
          );
          console.log(pageData.getActionPage.actionButtons.items);
          console.log(button);
          if (button) {
            // update  the button
            inputVariables.id = button.id;
            updateActionButton({ variables: { input: inputVariables } });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists) {
          console.log('creating a new button');
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
        console.log('we did it!');
      }
    }

    // handle starterPackUrl
    if (actionValue?.starterPack && actionChecked?.starterPack) {
      newTargetUrl = actionValue.starterPack;
      let recordExists = false;
      console.log(pageData);
      const inputVariables = {
        ...apiActionsConfig.starterPack,
        actionPageID: actionPageId,
        targetURL: actionValue.starterPack,
      };
      if (pageData) {
        // if the action buttons exist in the pageData, update them
        if (pageData?.getActionPage) {
          const button = pageData.getActionPage.actionButtons.items.find(
            element => element.buttonIcon === 'Ticket'
          );
          console.log(pageData.getActionPage.actionButtons.items);
          console.log(button);
          if (button) {
            console.log('updating a button');
            // update  the button
            inputVariables.id = button.id;
            updateActionButton({ variables: { input: inputVariables } });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists) {
          console.log('creating a new button');
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
        console.log('we did it!');
      }
    }

    // handle followMusicUrl
    if (actionValue?.followMusic && actionChecked?.followMusic) {
      newTargetUrl = actionValue.followMusic;
      let recordExists = false;
      const inputVariables = {
        ...apiActionsConfig.followMusic,
        actionPageID: actionPageId,
        targetURL: newTargetUrl,
      };
      if (pageData) {
        // if the action buttons exist in the pageData, update them
        if (pageData?.getActionPage) {
          const button = pageData.getActionPage.actionButtons.items.find(
            element => element.buttonIcon === 'Music'
          );
          console.log(pageData.getActionPage.actionButtons.items);
          console.log(button);
          if (button) {
            console.log('updating a button');
            // update  the button
            inputVariables.id = button.id;
            updateActionButton({ variables: { input: inputVariables } });
            recordExists = true; // don't go on to create a new record
          }
        }
        if (!recordExists) {
          console.log('creating a new button');
          // create the button record
          addActionPageButton({
            variables: { input: inputVariables },
          });
        }
        console.log('we did it!');
      }
    }

    return {
      isLoading: false,
    };
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Set Up Fan Actions</h2>
        </Col>
      </Row>
      <ActionCard>
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
                    {...item}
                    key={item.id}
                    isLast={i + 1 === actions.length}
                    onChangeCheckbox={() => onChangeCheckbox(item?.id)}
                    inputOnChange={e => onChangeInput(e, item?.id)}
                    isChecked={actionChecked[item.id]}
                    inputValue={actionValue[item.id]}
                  />
                );
              })}
            </Col>
          </Row>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col>
              <SaveButton onClick={onSubmit}>Save Action Card</SaveButton>
            </Col>
          </Row>
        </Card.Body>
      </ActionCard>
    </Container>
  );
};

SetupActions.propTypes = {
  onChangeCheckbox: PropTypes.func,
  onChangeInput: PropTypes.func,
  actionPageId: PropTypes.string,
  artistRoute: PropTypes.string,
  actionChecked: PropTypes.shape({
    email: PropTypes.bool,
    vipGroup: PropTypes.bool,
    starterPack: PropTypes.bool,
    followMusic: PropTypes.bool,
  }),
  actionValue: PropTypes.shape({
    email: PropTypes.string,
    vipGroup: PropTypes.string,
    starterPack: PropTypes.string,
    followMusic: PropTypes.string,
  }),
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
  actionPageId: null,
  artistRoute: null,
  onChangeCheckbox: () => {},
  onChangeInput: () => {},
  actionChecked: {},
  actionValue: {},
};
