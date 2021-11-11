import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import {
  updateArtistIntegrations,
  createArtistIntegrations,
} from '../../../graphql/mutations';
import { getArtistUser } from '../../../graphql/queries';
import { TextField } from '../../../Components/UI/TextField';
import { Button } from '../../../Components/UI/Button';
import { SelectList } from '../../../Components/UI/SelectList';
import { Icon } from '../../../Components/UI/Icon';
import { useTheme } from '../../../Hooks/useTheme';
import {FacebookGrantPagePermissions} from '../../../Components/UI/Integrations/Facebook/FacebookGrantPagePermissions';

const INPUT_KEYS = ['Amplitude', 'ActiveCampaign'];

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

export const SetupIntegration = ({ userId, artistId, ...props }) => {
  const [activeIntegrations, setActiveIntegrations] = useState();
  const [facebookPageList, setFacebookPageList] = useState();
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

  console.log('SetupIntegration artistData', artistData);
  console.log('activeIntegrations', activeIntegrations);
  console.log('formValue', formValue);

  const [updateArtistIntegration] = useMutation(gql(updateArtistIntegrations));
  const [createArtistIntegration] = useMutation(gql(createArtistIntegrations));

  const saveIntegrations = () => {
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
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 style={{ fontSize: theme.fontSizes.lg }}>Set Up Integrations</h2>
        </Col>
      </Row>
      <ActionContainer>
        <CardBody>
          <Col style={{ padding: 0, marginBottom: 25 }}>
            <h3>Integration</h3>
            <p>
              This is where all the magic happens. Set up your external integrations for Facebook Messaging and user tracking 
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
                  Select the Facebook page for your Facebook Messenger Campaign...
                </p>
              </Col>
              <IconContainer>
                <Icon name="MdOutlineContactPage" color="white" />
              </IconContainer>
            </Row>
             {/* {facebookPageList ? <Row>
                <Col>
                  <SelectList
                    hideLabel
                    label="Facebook Page"
                    value={formValue.FacebookPage}
                    onChange={e =>
                      setFormValue({
                        ...formValue,
                        FacebookPage: e.target.value,
                      })
                    }
                    placeholder="Facebook Page..."
                    options={[
                      { value: 1, label: 'Option 1' },
                      { value: 2, label: 'Option 2' },
                      { value: 3, label: 'Option 3' },
                    ]}
                  />
                </Col>
              </Row> :  */}
            <Row> 
              <Col>
              <FacebookGrantPagePermissions userId={userId} artistId={artistId}/>
              </Col>
            </Row>
            {/* } */}
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
  );
};

SetupIntegration.propTypes = {
  userId: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
};
