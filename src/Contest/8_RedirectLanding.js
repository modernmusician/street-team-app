
import React from 'react';
import axios from 'axios';
import SessionVariables from '../functional-tests/SessionVariables';

 function RedirectLanding() {
   
   const search = window.location.href;
   const a = search.search("=");
   const first = search.substr(a);
   const b = first.search("&token_type");
   const token1 = first.substr(1,(b-1));
    if (token1) {
        SessionVariables.setToken(token1);
        SpotifyRedirectToContest();
        //if token is not null then take the token and call the spotify api for following the artist.
        
    } else {
        //if there is no token then redirect back to Contest Page
        SpotifyRedirectToContest();
    }
  return (
    <div>
    </div>
  )
}

export default RedirectLanding
  
  function SpotifyRedirectToContest() {
      
      let clientID = SessionVariables.getClientId();
      
      window.location.href = "https://f1bf79aaf3f3461a991df7b204943be0.vfs.cloud9.us-west-2.amazonaws.com/secure/contest/" + clientID;
    
  }


