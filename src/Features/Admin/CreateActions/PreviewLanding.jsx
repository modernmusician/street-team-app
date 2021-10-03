import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Col, Row, Container, Card } from 'react-bootstrap';
import { Icon, FanMagnetButton } from '../../../Components/UI';
import { PageHeader } from '../../../Components/Page';
import { PlayWidget } from '../../../Components/UI/Integrations/SoundCloud/PlayWidget';

const PlayerContainer = styled.div`
  padding: 20px 0;
`;

const ActionCard = styled(Card)({
  background: ({ theme }) => theme.colors.gray2,
});

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

const SoundCloudPlaceholder = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 165,
  background: ({ theme }) => theme.colors.white,
  color: ({ theme }) => theme.colors.gray2,
  fontSize: 40,
});

export const PreviewLanding = ({ soundCloudURL }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Preview</h2>
        </Col>
      </Row>
      <ActionCard>
        <HeaderRow>
          <PageHeader>Listen For 30 Seconds to Unlock a Free Gift</PageHeader>
          <PlayerContainer>
            {soundCloudURL ? (
              <div style={{ height: 165 }}>
                <PlayWidget sourceUrl={soundCloudURL} />
              </div>
            ) : (
              <SoundCloudPlaceholder>
                Enter SoundCloud URL To Preview
              </SoundCloudPlaceholder>
            )}
          </PlayerContainer>
          <FanMagnetButton
            active
            activeBgColor="#807650"
            activeColor="#202021"
            inactiveBgColor="#544c2e"
          >
            <ButtonContainer>
              <Icon
                color="#202021"
                name="Gift"
                size={70}
                style={{ marginRight: 20 }}
              />
              CLAIM YOUR FREE GIFT
            </ButtonContainer>
          </FanMagnetButton>
        </HeaderRow>
      </ActionCard>
    </Container>
  );
};

PreviewLanding.propTypes = {
  soundCloudURL: PropTypes.string,
};

PreviewLanding.defaultProps = {
  soundCloudURL: null,
  // 'https://soundcloud.com/tobyfox-music/cyber-battle-solo-feat-lena',
};
