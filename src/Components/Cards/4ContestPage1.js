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

import { gql, useMutation } from '@apollo/react-hooks';
import { updateEnduser,updateContestSubscription } from '../../graphql/mutations';

import axios from 'axios';
const ArtistID = "74ASZWbe4lXaubB36ztrGX";
const TrackID = "5zYIwD8u865sLmcDtORhEn";

const baseURL ='https://accounts.spotify.com/authorize';
const clientID = 'e3d73c4d578b49f185a95fb5dbb09385';
//TODO: Need to update the redirect url to make sure that the right url is queried.
const redirect_uri = 'https:%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2F';
const url = baseURL + '?client_id='+ clientID + '&redirect_uri=' + redirect_uri + '&scope=user-follow-modify%20user-library-modify%20user-read-recently-played&response_type=token&state=alfalfa111333';
let content = null;
const getJson = null;
const fetch = require("node-fetch");
//let token1 = null;



let pointSetter = 0;
let totalPoints = 0;

function ContestPage1Card({userFirstName, userLastName,totalPoints,contestHeadline,contestDescription,buttonText,contestDeadline,contestImg,streetTeamUrl,spotifyPlayUrl,spotifyFollowArtistUrl,spotifyFollowPlaylistUrl,spotifySaveUrl,actionSpotifyPlay,actionSpotifyFollow,actionSpotifySave,actionStreetTeam,enduserContestID}) {

function addHttpPrefix(){
  
}  
  
contestHeadline= (contestHeadline=="") ? "Win a Baby" : contestHeadline;
contestDescription= (contestDescription=="") ? "Enter for a chance to win a happy, healthy baby girl!" : contestDescription;
buttonText= (buttonText=="") ? "Enter to Win >" : buttonText;
contestDeadline= (contestDeadline=="") ? "4/13/2021" : contestDeadline;
contestImg= (contestImg=="") ? "../baby.png" : contestImg;
  
  const [showSpotifyBox, setDisplay] = useState(false);
  const [completedSpotifyPlay, setCompletedSpotifyPlay] = useState(false);
  const [completedSpotifyFollow, setCompletedSpotifyFollow] = useState(false);
  const [completedSpotifySave, setCompletedSpotifySave] = useState(false);
  const [completedJoinStreetTeam, setCompletedJoinStreetTeam] = useState(false);
  
  const spotifyPlayButton = actionSpotifyPlay ? null : "hide";
  const spotifyFollowButton = actionSpotifyFollow ? null : "hide";
  const spotifySaveButton = actionSpotifySave ? null : "hide";
  const streetTeamButton = actionStreetTeam ? null : "hide";

    const search1 = window.location.href;
    const a1 = search1.search("=");
    const first1 = search1.substr(a1);
    const b = first1.search("&token_type");
    const token1 = first1.substr(1,(b-1));
    
    // const { data: contestData, loading: contestLoading, error: contestError,} 
    // = useMutation(gql(updateEnduser), {
    // variables: { id: enduserId, contestPoints:  },
    // });
    // spotifySaveUrl = first1;
    
  //// Handle Actions
const [updateEnduserData] = useMutation(gql(updateEnduser))
const [updateContestSubscriptionData] = useMutation(gql(updateContestSubscription))

function incrementPoints(pointSetter){
  totalPoints = (totalPoints + pointSetter);
}

//TODO: I think the spotify play is being called like every few seconds and stuff.
  const handleSpotifyFollow = () => {
    
    
    if (!completedSpotifyFollow) {
    console.log("We are getting hit");
      if (token1) {
        SpotifyFollowAPICall(token1);
        incrementPoints(50);
        setCompletedSpotifyFollow(true);
    } else {
        //content = search;
        setCompletedSpotifyFollow(false);
        SpotifyRedirect();
       
    }
      
  }
  }
    
  //// Complete Actions
  //TODO update enduser record in the database that each item is complete
  const completeStreetTeamJoin = () => {
    if (!completedJoinStreetTeam) {
      incrementPoints(100);
      updateContestSubscriptionData({variables:{input :{
        id:enduserContestID,
        enduserPoints:totalPoints,
        completeStreetTeamJoin: true
      }}});
      console.log({completedJoinStreetTeam});
      
  }
    setCompletedJoinStreetTeam(true);
    window.open(streetTeamUrl, '_blank');
    
  }
  
  const completeSpotifyFollow = () => {
    setCompletedSpotifyFollow(true);
}
  
  const completeSpotifySave = () => {
    setCompletedSpotifySave(true);
    if (!completedSpotifySave) {
      
      if (token1) {
        
        SpotifySaveAPICall(token1);
        incrementPoints(50);
    } else {
        setCompletedSpotifySave(false);
        SpotifyRedirect();
       
    }
        
  }}
  
    const completeSpotifyPlay = () => {
    setCompletedSpotifyPlay(true);
    if (!completedSpotifyPlay) {
      incrementPoints(2);
  }}
  
  return (
    <div>
      <Card>
        <div className="headline-top margin-reset">
          <div className="flex-top-headline">
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
              <hr width="76%" align="left" margin-top="0" fontWeight="bold"/>
              <h4> Get to the top of the list by completing the following supportive actions </h4>
            </Card.Title>
          <div className="register-button-box">
          {/*
            Now we need to engineer the playing of the song and it returning a number that says it was played by this person,
            and the way for this to be accomplished is to have spotify go and pull recently played with the api call.
            
          */}
          
          {/*TODO: We need to implement the api calls to run as the spotify play box is beginning to start playing.*/}
            <div className={spotifyPlayButton} onClick={() => { setDisplay(!showSpotifyBox); incrementPoints(20); }}>
              <ActionPointsButtonTyped 
                preActionText="Play on Spotify"
                postActionText="Played on Spotify"
                actionType="spotifyPlay"
                pointValue={20}
                url= {spotifyPlayUrl}
                completed={completedSpotifyPlay}
              />
            </div>
            
            
            {showSpotifyBox ? <div onClick={() => { setCompletedSpotifyPlay(true); }}> <SpotifyPlayBox /> </div> : null}
            
            <div className={spotifyFollowButton} onClick={handleSpotifyFollow}>
              <ActionPointsButtonTyped 
                preActionText="Follow on Spotify"
                postActionText="Followed on Spotify"
                actionType="spotifyFollow"
                pointValue={50}
                url= ""//{spotifyFollowArtistUrl}
                completed={completedSpotifyFollow}
              />
            </div>
            
            <div className={spotifySaveButton} onClick={completeSpotifySave}>
              <ActionPointsButtonTyped 
                preActionText="Save on Spotify"
                postActionText="Saved on Spotify"
                actionType="spotifySave"
                pointValue={50}
                url= "https://www.facebook.com"
                completed={completedSpotifySave}
              />
            </div>
            
            <div className={streetTeamButton} onClick={completeStreetTeamJoin}>
              <ActionPointsButtonTyped 
                preActionText="Join Street Team"
                postActionText="Joined Street Team"
                actionType="streetTeamJoin"
                pointValue={100}
                url= {streetTeamUrl}
                completed={completedJoinStreetTeam}
              />
            </div>
          </div>
            <hr className="fade-light" />
            
          <Link className="link-button" to="/referral">
   
            <Button className="btn active btn-default card-container-button button-continue">
              {buttonText} 
            </Button>
         
          </Link>

          </div>
          <PointsBox 
          totalPoints={totalPoints} 
          includeText={true}
          userName={userFirstName + " " + userLastName}
          totalReferrals={0}
          bonusPoints={0}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
  async function SpotifyFollowAPICall(token1) {
    console.log(token1);
    
    axios({
      //TODO: We need to pass in the ArtistID from the DB.
      url: "https://api.spotify.com/v1/me/following?type=artist&ids=" + ArtistID,
      method: 'put',
      headers: { Accept: "application/json",
                Authorization: "Bearer " + token1,
                "Content-Type": "application/json",
                }
    })
      .then(res => {
        console.log(`Axios Call completed`);
        });
  }
  async function SpotifySaveAPICall(token1) {
    console.log(token1);
    axios({
      //TODO: Need to pass in the correct Track ID for the artist.
      url: "https://api.spotify.com/v1/me/tracks?ids=" + TrackID,
      method: 'put',
      headers: { Accept: "application/json",
                Authorization: "Bearer " + token1,
                "Content-Type": "application/json",
                }
    })
      .then(res => {
        console.log(`Axios Call completed`)
        });
  }
  function SpotifyRedirect() {
      window.location.href = url;
    
  }
  function SpotifyRedirectToContest() {
  
    
    const search1 = window.location.href;
    const a1 = search1.search("#");
    const first1 = search1.substr(a1);
    //TODO: Will need to change back to the /contest url to 
    window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/" + first1;
    
  }

export default ContestPage1Card;
