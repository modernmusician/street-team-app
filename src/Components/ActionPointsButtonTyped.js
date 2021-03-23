import React, {useState} from "react"
import { Link } from '@reach/router';
import Button from 'react-bootstrap/Button';
import SpotifyPlayBox from "./SpotifyPlayBox";
import ActionPointsButton from "./ActionPointsButton"

import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";


function ActionPointsButtonTyped({preActionText,postActionText,actionType,pointValue,url,completed}) {
    
    const { buttonColor, buttonTextColor, icon } =
    (actionType === "spotifyPlay") ? {
    buttonColor: "spotify-color",
    buttonTextColor: "light ",
    icon: FaSpotify }
    :
    (actionType === "spotifyFollow") ? {
    buttonColor: "spotify-color",
    buttonTextColor: "light ",
    icon: FaSpotify }
    :
    (actionType === "spotifySave") ? {
    buttonColor: "spotify-color",
    buttonTextColor: "light ",
    icon: FaSpotify }
    :
    (actionType === "streetTeamJoin") ? {
    buttonColor: "complete-registration-color",
    buttonTextColor: "dark ",
    icon: MdLibraryMusic }
    :
    {buttonColor: "complete-registration-color",
    buttonTextColor: "dark ",
    icon: MdLibraryMusic }
    
    return(
        <div class="button-container">
              <ActionPointsButton 
                text={completed ? postActionText : preActionText} 
                path={url}
                icon={completed ? FaCheckCircle : icon}
                points={pointValue}
                textBoxColor={completed ? buttonColor + "-gradient clicked" : buttonColor + "-gradient"}
                pointsBoxColor={completed ? buttonColor + " clicked" : buttonColor}
                buttonTextStyle={completed ? "light clicked-text " : buttonTextColor}
                buttonIconStyle={completed ? "light clicked-text " : buttonTextColor}
                heightClass="button-small-height"
                pointsSize="button-points-total-action"
                completed={completed}
              />
        </div>
        )
}

export default ActionPointsButtonTyped