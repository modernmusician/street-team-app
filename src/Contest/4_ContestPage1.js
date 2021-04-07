import React, {useState} from 'react';
import styled from 'styled-components';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/4ContestPage1';

import { gql, useQuery } from '@apollo/react-hooks';
import { getContest, getEnduser } from '../graphql/queries';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function ContestPage1() {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestId = '762be373-ae1d-45e2-aef2-08aebac72c75';
  const contestId = 'little-contest'
  const enduserId = '762be373';
  console.log(contestId);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  // console.log(contestID);
  // const id = contestID;
  
  // get the logged in user's ID
  Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then(user => {
      setUserId(user.username);
      console.log(`Load additional settings for user: ${user.username}`);
      // TBD
    })
    .catch(err => setError(err));
  
  // setUserId(enduserId);
  
  const {
    data: contestData,
    loading: contestLoading,
    error: contestError,
  } = useQuery(gql(getContest), {
    variables: { id: contestId },
  });

  const {
    data: enduserData,
    loading: enduserLoading,
    error: enduserError,
  } = useQuery(gql(getEnduser), {
    variables: { id: userId },
  });

  if (contestLoading || enduserLoading) {
    return <div><p>Loading...</p></div>;
  }
  if (contestError || enduserError) {
    return (
      <div>
        <p>Contest Data Error: ${contestError.message} </p>
        <p>User Data Error: ${enduserError.message} </p>
      </div>
    );
  }

  console.log(contestData);
  const contestInfo = contestData.getContest;
  console.log(enduserData);
  const enduserInfo = enduserData.getEnduser;
  
  const formattedDeadline = contestInfo.deadline.replace(/-/g, "/");

  // const spotifyPlayAction = contestInfo.actions.spotifyPlay ? contestInfo.actions.spotifyPlay : 
  
  const enduserContestInfo = enduserInfo.subscriptions.items.find(element => element.contestID == contestId)
  console.log(enduserContestInfo.completeStreetTeamJoin);

  return (
    <div>
      <div>
        <Background myclassName="background-wrapper" />
      </div>
      <div>
        <CenterBox
          boxContent={
            <ContestPage1Card
              // contestHeadline="Win a Baby"
              // contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              // buttonText="CONTINUE"
              // contestDeadline="4/1/2021"
              // contestImg="../baby.png"
              contestHeadline={contestInfo.headline}
              contestDescription={contestInfo.description}
              buttonText={contestInfo.contestButtonText ? contestInfo.contestButtonText : "CONTINUE"}
              contestDeadline={formattedDeadline} //TODO deadline needs to be UTC
              contestImg={contestInfo.picture.publicUrl}
              actionSpotifyPlay={true}
              actionSpotifyFollow={true}
              actionSpotifySave={true}
              actionStreetTeam={true}
              // actionSpotifyPlay={contestInfo.actions.spotifyPlay}
              // actionSpotifyFollow={contestInfo.actions.spotifyFollow}
              // actionSpotifySave={contestInfo.actions.spotifySave}
              // actionStreetTeam={contestInfo.actions.streetTeamJoin}
              // streetTeamUrl={contestInfo.actions.streetTeamJoin.Url}
              // spotifyPlayUrl={contestInfo.actions.spotifyPlay.Url}
              // spotifyFollowPlaylistUrl={contestInfo.actions.spotifyFollowPlaylist.Url}
              // spotifyFollowArtistUrl={contestInfo.actions.spotifyFollowArtist.Url}
              // spotifySaveUrl={contestInfo.actions.spotifySave.Url}
              streetTeamUrl={contestInfo.streetTeamUrl || "https://www.modern-musician.com"}
              spotifyPlayUrl={contestInfo.spotifyPlayUrl}
              spotifyFollowPlaylistUrl={contestInfo.spotifyFollowPlaylistUrl}
              spotifyFollowArtistUrl={contestInfo.spotifyFollowArtistUrl}
              spotifySaveUrl={contestInfo.spotifySaveUrl}
              userFirstName={enduserInfo.firstName || "Michael"}
              userLastName={enduserInfo.lastName || "Walker"}
              totalPoints={enduserContestInfo.enduserPoints || 30}
              enduserContestID={enduserContestInfo.id}
              spotifyToken={enduserInfo.spotifyToken}
              spotifyDailyPlayCount={enduserContestInfo.spotifyDailyPlayCount}
              completedSpotifyPlay={enduserContestInfo.completeSpotifyPlay}
              completedSpotifyFollow={enduserContestInfo.completeSpotifyFollow}
              completedSpotifySave={enduserContestInfo.completeSpotifySave}
              completedStreetTeamJoin={enduserContestInfo.completeStreetTeamJoin}
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

// export default withAuthenticator(ContestPage1,{initialAuthState: 'signup'},);
export default ContestPage1