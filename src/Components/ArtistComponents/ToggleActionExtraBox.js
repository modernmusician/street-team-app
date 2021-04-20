import React, { useState, useRef } from 'react';

import { Link } from '@reach/router';

import SpotifyPlayInputForm from "./ActionInputForms/SpotifyPlayInputForm";
import SpotifyFollowInputForm from "./ActionInputForms/SpotifyFollowInputForm";
import SpotifySaveInputForm from "./ActionInputForms/SpotifySaveInputForm";
import StreetTeamInputForm from "./ActionInputForms/StreetTeamInputForm";


const ToggleActionExtraBox = ({
      inputValues,
      setInputValues,
      handleOnChange,
      actionType,
      
}) => {
      
    if  (actionType === "spotifyPlay") {
      return <SpotifyPlayInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else if (actionType === "spotifyFollow") {
      return <SpotifyFollowInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else if (actionType === "spotifySave") {
      return <SpotifySaveInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else if (actionType === "streetTeamJoin") {
      return <StreetTeamInputForm
      inputValues = {inputValues}
      handleOnChange = {handleOnChange}
      setInputValues = {setInputValues}
      />;
    } else {
      return null
    }
}

export default ToggleActionExtraBox