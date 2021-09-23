import React, { useContext } from 'react';
import styled from 'styled-components';
import { FanMagnetButton } from '../../../../Components/UI';
import { PageHeader } from '../../../../Components/Page/PageHeader';
import {
  FanMagnetContext,
  SURVEY_SELECTION,
} from '../../../../context/FanMagnetContext';

const Step2MagnetHeader = styled(PageHeader)`
  && {
    font-size: 60px;
    margin-bottom: 35px;
  }
`;

const MagnetButton = styled(FanMagnetButton)`
  margin: 0 0 50px;
  font-size: 51px;
  font-weight: 400;
  padding: 30px 47px;

  span {
    font-size: 55px;
    margin-right: 43px;
  }
`;

export const FanMagnetStep2 = () => {
  const { setFanMagnetSurvey } = useContext(FanMagnetContext);
  return (
    <React.Fragment>
      <Step2MagnetHeader>Did you enjoy the song?</Step2MagnetHeader>
      <MagnetButton
        active
        activeBgColor="linear-gradient(0deg, rgba(45,132,86,1) 0%, rgba(61,175,114,1) 100%);"
        activeColor="white"
        margin="0 0 50px"
        handleClick={() => {
          setFanMagnetSurvey(SURVEY_SELECTION.LOVE_IT);
        }}
      >
        <span>👍</span>
        <div>{SURVEY_SELECTION.LOVE_IT}</div>
      </MagnetButton>
      <MagnetButton
        active
        activeBgColor="linear-gradient(0deg, rgba(77,77,77,1) 0%, rgba(113,113,113,1) 100%);"
        activeColor="white"
        margin="0 0 50px"
        handleClick={() => {
          setFanMagnetSurvey(SURVEY_SELECTION.OKAY);
        }}
      >
        <span>👌</span>
        <div>{SURVEY_SELECTION.OKAY}</div>
      </MagnetButton>
      <MagnetButton
        active
        activeBgColor="linear-gradient(0deg, rgba(143,37,40,1) 0%, rgba(183,47,51,1) 100%);"
        activeColor="white"
        margin="0 0 50px"
        handleClick={() => {
          setFanMagnetSurvey(SURVEY_SELECTION.DISLIKE);
        }}
      >
        <span>👌</span>
        <div>{SURVEY_SELECTION.DISLIKE}</div>
      </MagnetButton>
    </React.Fragment>
  );
};
