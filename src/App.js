import './App.css';

import { Router } from '@reach/router';
import React from 'react';
// import axios from 'axios';
import Registration from './Contest/2_Registration';
import Landing from './Contest/1_Landing';
import EmailRegistration from './Contest/3_EmailRegistration';
import ContestPage1 from './Contest/4_ContestPage1';
import ReferralPage from './Contest/5_ReferralPage';
import SpotifyFollowArtist from './Contest/6_SpotifyFollowArtist';
import SpotifySaveSong from './Contest/7_SpotifySaveSong';
import Login from './Contest/A1_Login';
import CreateContestPage from './Contest/A2_CreateContest';

import DisplayArtist from './Components/TestDisplayAndCreate/displayArtists';
import DisplayContest from './Components/TestDisplayAndCreate/displayContests';

function App() {
  return (
    <Router>
      <Landing path="/landingpage/:contestID" />
      <Registration path="/registration" />
      <EmailRegistration path="/register-email" />
      <ContestPage1 path="/contest" />
      <ReferralPage path="/referral" />
      <Login path="/login" />
      <CreateContestPage path="/" />
      <SpotifyFollowArtist path="/spotify-follow-artist" />
      <SpotifySaveSong path="/spotify-save-song" />
      <DisplayArtist path="/artists" />
      <DisplayContest path="/contests" />
    </Router>
  );
}

export default App;
