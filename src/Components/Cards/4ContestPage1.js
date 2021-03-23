// import '.../App.css';


import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// import Background from './Background';
import Countdown from '../Countdown';
import ReactDeadline from '../ReactDeadline';
import PointsBox from "../PointsBox"
import ActionPointsButton from "../ActionPointsButton"
import ActionPointsButtonTyped from "../ActionPointsButtonTyped"
import EmailForm from "../EmailForm";
import ProgressBox from "../ProgressBox"
import SpotifyPlayBox from "../SpotifyPlayBox"


import { IoIosCheckbox } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";

let pointSetter = 0;
let totalPoints = 0;
function ContestPage1Card({contestHeadline,contestDescription,buttonText,contestDeadline,contestImg,streetTeamUrl,spotifyPlayUrl,spotifyFollowArtistUrl,spotifyFollowPlaylistUrl,spotifySaveUrl,actionSpotifyPlay,actionSpotifyFollow,actionSpotifySave,actionStreetTeam}) {
  
  
 contestHeadline= (contestHeadline=="") ? "Win a Baby" : contestHeadline;
 contestDescription= (contestDescription=="") ? "Enter for a chance to win a happy, healthy baby girl!" : contestDescription;
 buttonText= (buttonText=="") ? "Enter to Win >" : buttonText;
contestDeadline= (contestDeadline=="") ? "4/13/2021" : contestDeadline;
contestImg= (contestImg=="") ? "../baby.png" : contestImg;
  
  const [showSpotifyBox, setDisplay] = useState(false);
  const [buttonClickedSpotifyPlay, setClickedSpotifyPlay] = useState(false);
  const [buttonClickedSpotifyFollow, setClickedSpotifyFollow] = useState(false);
  const [buttonClickedSpotifySave, setClickedSpotifySave] = useState(false);
  const [buttonClickedJoinStreetTeam, setClickedJoinStreetTeam] = useState(false);
  
  const [completed, setCompleted] = useState(false);
  
  const spotifyPlayButton = actionSpotifyPlay ? null : "hide";
  const spotifyFollowButton = actionSpotifyFollow ? null : "hide";
  const spotifySaveButton = actionSpotifySave ? null : "hide";
  const streetTeamButton = actionStreetTeam ? null : "hide";
  
    const search1 = window.location.href;
    const a1 = search1.search("#");
    const first1 = search1.substr(a1);
    
    spotifySaveUrl = first1;
  
  return (
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div class="flex-top-headline">
            <div className= "left-align top-left-headline">
              {contestHeadline}
            </div>
            <div className="top-right-countdown center">
            <ReactDeadline startDate={contestDeadline} />
            </div>
          </div>
        </div>
        
        <div> 
          <ProgressBox progressStep={3} />
        </div>
        
        <Card.Body>
          <div className="card-container-text">
            <Card.Title className="register-headline">
              <h3> Increase Your Chances of Winning </h3>
              <hr width="76%" align="left" margin-top="0" font-weight="bold"/>
              <h4> Get to the top of the list by completing the following supportive actions </h4>
            </Card.Title>
          <div className="register-button-box">
          {/*
            Now we need to engineer the playing of the song and it returning a number that says it was played by this person,
            and the way for this to be accomplished is to have spotify go and pull recently played with the api call.
            
          */}
          
          {/*TODO: We need to implement the api calls to run as the spotify play box is beginning to start playing.*/}
            <div class={spotifyPlayButton} onClick={() => { setDisplay(!showSpotifyBox); incrementPoints(20); }}>
              <ActionPointsButtonTyped 
                preActionText="Play on Spotify"
                postActionText="Played on Spotify"
                actionType="spotifyPlay"
                pointValue={20}
                url= {spotifySaveUrl}
                completed={buttonClickedSpotifyPlay}
              />
            </div>
            
            
            {showSpotifyBox ? <div onClick={() => { setClickedSpotifyPlay(true); }}> <SpotifyPlayBox /> </div> : null}
            
            <div class={spotifyFollowButton} onClick={() => { setClickedSpotifyFollow(true); incrementPoints(50); }}>
              <ActionPointsButtonTyped 
                preActionText="Follow on Spotify"
                postActionText="Followed on Spotify"
                actionType="spotifyFollow"
                pointValue={50}
                url= {spotifyFollowArtistUrl}
                completed={buttonClickedSpotifyFollow}
              />
            </div>
            
            <div class={spotifySaveButton} onClick={() => { setClickedSpotifySave(true); incrementPoints(50); }}>
              <ActionPointsButtonTyped 
                preActionText="Save on Spotify"
                postActionText="Saved on Spotify"
                actionType="spotifySave"
                pointValue={50}
                url= {spotifySaveUrl}
                completed={buttonClickedSpotifySave}
              />
            </div>
            
            <div class={streetTeamButton} onClick={() => { setClickedJoinStreetTeam(true); incrementPoints(100) }}>
              <ActionPointsButtonTyped 
                preActionText="Join Street Team"
                postActionText="Joined Street Team"
                actionType="streetTeamJoin"
                pointValue={100}
                url= {streetTeamUrl}
                completed={buttonClickedJoinStreetTeam}
              />
            </div>
          </div>
            <hr class="fade-light" />
            
          <Link className="link-button" to="/referral">
   
            <Button className="btn active btn-default card-container-button button-continue">
              {buttonText} 
            </Button>
         
          </Link>

          </div>
          <PointsBox 
          totalPoints={totalPoints} 
          includeText={true}
          userName="Michael Walker"
          totalReferrals={0}
          bonusPoints={0}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
function incrementPoints(pointSetter){
  
  totalPoints = totalPoints + pointSetter;
  // if(pointSetter == 20){
    
  // }
}

export default ContestPage1Card;
