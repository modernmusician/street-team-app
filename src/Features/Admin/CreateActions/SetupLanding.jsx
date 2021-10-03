/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { TextField } from '../../../Components/UI/TextField';
import { Icon } from '../../../Components/UI/Icon';
import { Button } from '../../../Components/UI/Button';
import { useTheme } from '../../../Hooks/useTheme';

const ActionContainer = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
});

const CreateActionContainer = styled(Container)({
  border: '1px solid',
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

export const SetupLanding = ({ landingPageValues, setLandingPageValues }) => {
  const theme = useTheme();

  return (
    <Container>
      <Row>
        <Col>
          <h2>Set Up Your Magnet</h2>
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
                <h3>Your Soundcloud Link</h3>
                <p>Paste a link to your song on SoundCloud...</p>
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
                <h3>Your Free Gift Link</h3>
                <p>Paste a link to your free gift...</p>
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
              <Button onClick={() => console.log('test', landingPageValues)}>
                Setup Fan Magnet Page
              </Button>
            </Col>
          </Row>
        </CardBody>
      </ActionContainer>
    </Container>
  );
};

SetupLanding.propTypes = {
  landingPageValues: PropTypes.shape({
    gift: PropTypes.string,
    soundCloud: PropTypes.string,
  }),
  setLandingPageValues: PropTypes.func,
};

SetupLanding.defaultProps = {
  landingPageValues: {},
  setLandingPageValues: () => {},
};
