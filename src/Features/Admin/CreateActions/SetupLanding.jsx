/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/react-hooks';
import {
  updateActionPageButton,
  createActionPageButton,
} from '../../../graphql/mutations';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { TextField } from '../../../Components/UI/TextField';
import { Icon } from '../../../Components/UI/Icon';
import { Button } from '../../../Components/UI/Button';
import { useTheme } from '../../../Hooks/useTheme';

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
});

const CreateActionContainer = styled(Container)({
  border: '1px dashed',
  borderColor: ({ theme }) => theme.colors.gray,
  padding: ({ theme }) => theme.spacing.lg,
  marginBottom: ({ theme, isLast }) => !isLast && theme.spacing.md,
});

const IconContainer = styled(Col)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const CardBody = styled(Card.Body)(({ theme }) => {
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

export const SetupLanding = ({
  landingPageValues,
  setLandingPageValues,
  actionPageId,
  landingPageIds,
  setData,
}) => {
  const [error, setError] = useState(false);
  const theme = useTheme();
  const history = useHistory();

  const [updateActionButton] = useMutation(gql(updateActionPageButton), {
    onCompleted: data => {
      console.log('updateActionButton DATA', data);
      setData(data.updateActionPageButton);
      history.push('/admin/create-action-page');
    },
  });

  const [addActionPageButton] = useMutation(gql(createActionPageButton), {
    onCompleted: data => {
      console.log('addActionPageButton DATA', data);
      setData(data.createActionPageButton);
      history.push('/admin/create-action-page');
    },
  });

  const soundCloudConfig = {
    actionPageID: actionPageId,
    preActionText: null,
    postActionText: null,
    buttonIcon: null,
    backgroundColor: null,
    textColor: null,
    pointValue: null,
    position: 1,
    targetURL: landingPageValues.soundCloud,
    serviceAction: 'SoundCloudEmbed',
  };

  const continueConfig = {
    actionPageID: actionPageId,
    position: 2,
    serviceAction: 'ContinueButton',
  };

  const starterPackConfig = {
    actionPageID: actionPageId,
    buttonIcon: 'Gift',
    targetURL: landingPageValues.gift,
    backgroundColor: '#43C052',
    pointValue: 50,
    position: 4,
    preActionText: 'Claim Your Free Gift',
    postActionText: 'Gift Claimed',
    textColor: 'white',
  };

  const saveLandingPage = () => {
    const soundCloudURL = landingPageValues?.soundCloud;
    const giftURL = landingPageValues?.gift;
    const soundCloudId = landingPageIds?.soundCloud;
    const giftId = landingPageIds?.gift;
    const continueId = landingPageIds?.continue;
    if (actionPageId) {
      if (soundCloudURL && giftURL) {
        setError(false);
        if (soundCloudId && soundCloudURL) {
          updateActionButton({
            variables: { input: { ...soundCloudConfig, id: soundCloudId } },
          });
        } else if (soundCloudURL) {
          addActionPageButton({
            variables: { input: soundCloudConfig },
          });
        }

        if (giftId && giftURL) {
          updateActionButton({
            variables: { input: { ...starterPackConfig, id: giftId } },
          });
        } else if (giftURL) {
          addActionPageButton({
            variables: { input: starterPackConfig },
          });
        }

        if (!continueId) {
          addActionPageButton({
            variables: { input: continueConfig },
          });
        }
      } else {
        setError(true);
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ fontSize: theme.fontSizes.lg }}>Set Up Your Magnet</h2>
        </Col>
      </Row>
      <ActionContainer>
        <CardBody>
          <Col style={{ padding: 0, marginBottom: 25 }}>
            <h3>Fan Magnet</h3>
            <p>
              Create your "fan magnet" that will attract new listeners and
              convert them into subscribers of your music
            </p>
          </Col>
          <CreateActionContainer>
            <Row>
              <Col xs={10}>
                <h3 style={{ fontWeight: theme.fontWeights.semibold }}>Your Soundcloud Link</h3>
                <p>Paste a link to your song on SoundCloud...</p>
                {error && !landingPageValues?.soundCloud && (
                  <p style={{ color: 'red' }}>Required</p>
                )}
              </Col>
              <IconContainer>
                <Icon name="MdLibraryMusic" color="white" />
              </IconContainer>
            </Row>
            <Row>
              <Col>
                <TextField
                  hideLabel
                  label="SoundCloud URL"
                  value={landingPageValues?.soundCloud}
                  onChange={e =>
                    setLandingPageValues({
                      ...landingPageValues,
                      soundCloud: e.target.value,
                    })
                  }
                  placeholder="SoundCloud URL..."
                />
              </Col>
            </Row>
          </CreateActionContainer>
          <CreateActionContainer>
            <Row>
              <Col xs={10}>
                <h3 style={{ fontWeight: theme.fontWeights.semibold }}>Your Free Gift Link</h3>
                <p>Paste a link to your free gift...</p>
                {error && !landingPageValues?.gift && (
                  <p style={{ color: 'red' }}>Required</p>
                )}
              </Col>
              <IconContainer>
                <Icon name="FaGift" color="white" />
              </IconContainer>
            </Row>
            <Row>
              <Col>
                <TextField
                  hideLabel
                  label="Free Gift URL"
                  value={landingPageValues?.gift}
                  onChange={e =>
                    setLandingPageValues({
                      ...landingPageValues,
                      gift: e.target.value,
                    })
                  }
                  placeholder="Free Gift URL..."
                />
              </Col>
            </Row>
          </CreateActionContainer>
          <Row style={{ marginTop: theme.spacing.lg }}>
            <Col>
              <Button onClick={saveLandingPage}
                      style={{ fontWeight: theme.fontWeights.semibold,
                        fontFamily: theme.fonts.heading
                      }}>
                Next Step
              </Button>
            </Col>
          </Row>
        </CardBody>
      </ActionContainer>
    </Container>
  );
};

SetupLanding.propTypes = {
  actionPageId: PropTypes.string.isRequired,
  landingPageValues: PropTypes.shape({
    gift: PropTypes.string,
    soundCloud: PropTypes.string,
  }),
  landingPageIds: PropTypes.shape({
    gift: PropTypes.string,
    soundCloud: PropTypes.string,
    continue: PropTypes.string,
  }),
  setLandingPageValues: PropTypes.func,
  setData: PropTypes.func,
};

SetupLanding.defaultProps = {
  landingPageValues: {},
  landingPageIds: {},
  setLandingPageValues: () => {},
  setData: () => {},
};
