import React, { useContext } from 'react';
import styled from 'styled-components';
import { FanMagnetButton } from '../../../../Components/UI';
import { PageHeader } from '../../../../Components/Page/PageHeader';
import {
  FanMagnetContext,
  SURVEY_SELECTION,
} from '../../../../Context/FanMagnetContext';
import { useHistory } from 'react-router-dom';

const Step2MagnetHeader = styled(PageHeader)`
  && {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const MagnetButton = styled(FanMagnetButton)`
  margin: 0 0 50px;
  font-size: 30px;
  font-weight: 400;
  padding: 10px 17px;

  span {
    font-size: 55px;
    margin-right: 43px;

    @media (max-width: 600px) {
      margin-right: 18px;
    }
  }
`;

export const FanMagnetStep2 = () => {
  const { setFanMagnetSurvey } = useContext(FanMagnetContext);
  let history = useHistory();
  const continueToNextStep = () => {
    //pull the root path from the location and push to the /secure path for that artist
    const path = window.location.pathname;
    const currentPathArray = window.location.pathname
      .split('/')
      .filter(x => x !== '');
    const newRoute = ['/secure'].concat(currentPathArray[0]).join('/');
    history.push(newRoute);
  };

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
          continueToNextStep();
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
          continueToNextStep();
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
          continueToNextStep();
        }}
      >
        <span>👎</span>
        <div>{SURVEY_SELECTION.DISLIKE}</div>
      </MagnetButton>
    </React.Fragment>
  );
};
