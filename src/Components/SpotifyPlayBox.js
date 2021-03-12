import React, { useState, useEffect } from 'react';

import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";
import Text from "./Text";
import axios from 'axios';

const baseURL ='https://accounts.spotify.com/authorize';
const clientID = 'e3d73c4d578b49f185a95fb5dbb09385';
const redirect_uri = 'https:%2F%2Ff1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com%2F';
const url1 = baseURL + '?client_id='+ clientID + '&redirect_uri=' + redirect_uri + '&scope=user-follow-modify%20user-library-modify%20user-read-recently-played&response_type=token&state=alfalfa111333';
const ArtistID = "74ASZWbe4lXaubB36ztrGX";
let content = null;
const getJson = null;
const fetch = require("node-fetch");
const token1 = "";
//TODO: Can make a math function to make sure that the person listens to the song all the way through.

function SpotifyPlayBox() {
    const search = window.location.href;
   const a = search.search("=");
   const first = search.substr(a);
   const b = first.search("&token_type");
   const token1 = first.substr(1,(b-1));
   
   console.log(token1);
   
    if (token1) {
      
      SpotifyHook(token1);
        
        
    } else {
    
        
        //TODO: Need to bring the below back out of commented.
        SpotifyRedirect();
        
    }
    //SpotifyHook(token1);
    return(
        
            <div>
                <div class="spotify-play-full-container">
                    <div class="spotify-triangle-up"> </div> 
                </div>
                <div class="spotify-play-container">
                </div>
                    <div class="spotify-play-box">
                        <div class="spotify-top-text-container">
                            <div class="spotify-top-left-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> Play <Text weight="bold"> 1x </Text> a day </Text> </p>  </div>
                            <div class="spotify-top-right-text-box"> <p> <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> +20 </Text> each &nbsp; <span class = "spotify-vertical-line"> </span> &nbsp; &nbsp; </Text> </p> 
                            
                            <IconContext.Provider value={{ color: "hsla(141, 74%, 42%, 1)", className: "react-icons" }}>
                            <FaPlay />
                            </IconContext.Provider>
                            <p> &nbsp; <Text color="hsl(0, 0%, 80%, 1)"> <Text weight="bold"> 10 </Text>plays left </Text> </p> </div>
                        </div>
                        <div class="spotify-player"> 
                            <iframe 
                                src="https://open.spotify.com/embed/artist/0jXaeFozic6yOdJRGuUcrR" 
                                width="100%" 
                                height="100%" 
                                frameborder="0" 
                                allowtransparency="true" 
                                allow="encrypted-media">
                            </iframe>
                        </div>
                    </div>
            </div>
        )
};







//This will be the new and improved of what we need for API calling for the player's actual listening

 async function SpotifyRecentlyPlayedCall(token1) {
    axios({
      url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      method: 'get',
      headers: { Accept: "application/json",
                Authorization: "Bearer " + token1,
                "Content-Type": "application/json",
                }
    })
      .then(response => {
          console.log(response.data.items);
          console.log("This is the track ID: " + response.data.items[0].track.id);
          console.log("This is the Artist ID: " + response.data.items[0].track.artists[0].id);

        });
  };
  function URLSearchForToken(){
      const search = window.location.href;
        const a = search.search("=");
        const first = search.substr(a);
        const b = first.search("&token_type");
        const token1 = first.substr(1,(b-1));
  };
    function SpotifyRedirect() {
      window.location.href = url1;
    
  };
  function SpotifyRedirectToContest() {
      window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/contest";
    
  };
  function SpotifyHook(token1){
    const [seconds, setSeconds] = useState(0);
        useEffect(() => {
          const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
              console.log('Interval triggered');
              SpotifyRecentlyPlayedCall(token1);
          }, 10000);
    return () => clearInterval(interval);
    }, []);
  };






export default SpotifyPlayBox;