import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import {
  updateArtistIntegrations,
  createArtistIntegrations,
} from '../../../graphql/mutations';
import { getArtistUser } from '../../../graphql/queries';
import { TextField } from '../../../Components/UI/TextField';
import { Button } from '../../../Components/UI/Button';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';
import { FacebookGrantPagePermissions } from '../../../Components/UI/Integrations/Facebook';
import { facebookAppId } from '../../../utils/sharedUtils';

const INPUT_KEYS = ['Amplitude', 'ActiveCampaign', 'FacebookPage'];

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
  'input, select': {
    marginTop: ({ theme }) => theme.spacing.md,
  },
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

export const SetupIntegration = ({ userId, artistId, actionPageId }) => {
  const [activeIntegrations, setActiveIntegrations] = useState();
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    Amplitude: '',
    ActiveCampaign: '',
    FacebookPage: '',
  });

  const theme = useTheme();

  const { data: artistData } = useQuery(gql(getArtistUser), {
    variables: { id: userId },
  });

  const data = artistData?.getArtistUser;
  const integrations = data?.artist?.integrations?.items;

  useEffect(() => {
    if (integrations) {
      let form = formValue;
      let activeInt = {};
      for (let i = 0; i < integrations.length; i++) {
        const item = integrations[i];
        console.log('item', item);
        form = {
          ...form,
          [item.serviceName]: item.serviceApiKey,
        };
        activeInt = {
          ...activeInt,
          [item.serviceName]: item,
        };
      }
      setActiveIntegrations(activeInt);
      setFormValue(form);
    }
  }, [integrations]);

  const [updateArtistIntegration] = useMutation(gql(updateArtistIntegrations));
  const [createArtistIntegration] = useMutation(gql(createArtistIntegrations));

  const saveIntegrations = () => {
    try{
      for (let i = 0; i < INPUT_KEYS.length; i++) {
        const key = INPUT_KEYS[i];
        const config = {
          variables: {
            input: {
              artistID: artistId,
              serviceName: key,
              serviceApiKey: formValue[key],
              ...(activeIntegrations[key]?.id && {
                id: activeIntegrations[key].id,
              }),
            },
          },
        };
        if (activeIntegrations[key]) {
          updateArtistIntegration(config);
        } else {
          createArtistIntegration(config);
        }
      }
    }
    catch(err){
      console.log("something went wrong with saving the integrations")
      console.error(err);
    }
    setShow(true);
  };

  const copyLinkToClipboard = () => {
    const config = JSON.stringify([
      {
        message: {
          text: 'thanks for reaching out ✌️\n\n...were you trying to hear my new song?',
          quick_replies: [
            {
              content_type: 'text',
              title: "Yeah let's hear it!",
              payload: `{"pageID": "${actionPageId}","artistId":"${artistId}"}`,
            },
          ],
        },
        receiving_app_id: facebookAppId,
      },
    ]);
    console.log('config', config);
    navigator.clipboard.writeText(config);
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontSize: theme.fontSizes.lg }}>
              Set Up Integrations
            </h2>
          </Col>
        </Row>
        <ActionContainer>
          <CardBody>
            <Col style={{ padding: 0, marginBottom: 25 }}>
              <h3>Integration</h3>
              <p>
                This is where all the magic happens. Set up your external
                integrations for Facebook Messaging and user tracking
              </p>
            </Col>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your Active Campaign API Key
                  </h3>
                  <p>Paste a copy of your Active Campaign API Key...</p>
                </Col>
                <IconContainer>
                  <Icon name="MdOutlineStorefront" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="Active Campaign API Key"
                    value={formValue.ActiveCampaign}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        ActiveCampaign: e.target.value,
                      })
                    }
                    placeholder="Active Campaign API Key..."
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Your Amplitude API Key
                  </h3>
                  <p>Paste a copy of your Amplitude API Key...</p>
                </Col>
                <IconContainer>
                  <Icon name="MdOutlineAutoGraph" color="white" />
                </IconContainer>
              </Row>
              <Row>
                <Col>
                  <TextField
                    hideLabel
                    label="Amplitude API Key"
                    value={formValue.Amplitude}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        Amplitude: e.target.value,
                      })
                    }
                    placeholder="Amplitude API Key..."
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <CreateActionContainer>
              <Row>
                <Col xs={10}>
                  <h3 style={{ fontWeight: theme.fontWeights.semibold }}>
                    Facebook Page
                  </h3>
                  <p>
                    Select the Facebook page for your Facebook Messenger
                    Campaign...
                  </p>
                </Col>
                <IconContainer>
                  <Icon name="MdOutlineContactPage" color="white" />
                </IconContainer>
              </Row>
              <Row style={{ marginTop: theme.spacing.md }}>
                <Col>
                  <FacebookGrantPagePermissions
                    userId={userId}
                    artistId={artistId}
                  />
                </Col>
              </Row>
            </CreateActionContainer>
            <Row style={{ marginTop: theme.spacing.lg }}>
              <Col>
                <Button
                  onClick={saveIntegrations}
                  style={{
                    fontWeight: theme.fontWeights.semibold,
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Save Integrations
                </Button>
              </Col>
            </Row>
          </CardBody>
        </ActionContainer>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>One more thing!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p style={{ color: 'black' }}>
            Click the button below to copy your customized JSON code for your Facebook Ad Message Template.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={copyLinkToClipboard}>
            <Icon
              name="FaCopy"
              color="black"
              size={20}
              style={{ marginRight: 10 }}
            />
            Copy Config
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

SetupIntegration.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  actionPageId: PropTypes.string.isRequired,
};
