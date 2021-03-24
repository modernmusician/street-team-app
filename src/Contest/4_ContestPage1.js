import React from 'react';
import styled from 'styled-components';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/4ContestPage1';

import { gql, useQuery } from '@apollo/react-hooks';
import { getContest, getEnduser } from '../graphql/queries';

function ContestPage1() {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  const contestId = '762be373-ae1d-45e2-aef2-08aebac72c75';
  const enduserId = '762be373';
  // console.log(contestID);
  // const id = contestID;
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
    variables: { id: enduserId },
  });

  if (contestLoading || enduserLoading) {
    return <p>Loading...</p>;
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

  // const enduserData = {
  //   id: 'someenduserID',
  //   actions: {
  //     items: [
  //       {
  //         id: 'asdf8asdf0jad',
  //         content: 'actionText1',
  //         pointValue: '1',
  //         contestID: 'somecontestid',
  //         url: 'https://google.com',
  //         // createdAt
  //         // updatedAt
  //       },
  //     ],
  //     nextToken: 'somenextactiontoken',
  //   },
  // };

  //// this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const contestData = {
  //   id: 'somecontestid',
  //   headline: 'THIS IS A HEADLINE',
  //   description: 'this is a description',
  //   landingButtonText: 'btn TEXT',
  //   deadline: '3/4/2021 18:00:00',
  //   encouragementHeadline: 'Increase Your Chances of Winning Today',
  //   encouragementDescription:
  //     'Get to the top of the list by completing the following supportive actions',
  //   // "artistID"
  //   artist: {
  //     id: 'artistID',
  //     name: 'BIGFAT JAMBAND',
  //     contests: {
  //       nextToken: 'sometoken',
  //     },
  //   },
  //   actions: {
  //     items: {
  //       id: 'anitemid',
  //       content: 'actionText1',
  //       pointValue: '1',
  //       contestID: 'somecontestid',
  //       url: 'https://google.com',
  //       // createdAt
  //       // updatedAt
  //     },
  //     nextToken: 'somenextactiontoken',
  //   },
  //   //need to build a URL from this picture. Why not just use the public S3 URL?
  //   picture: {
  //     publicUrl: '../logo192.png',
  //     // id
  //     // name
  //     // owner
  //     // visibility
  //     // createdAt
  //     // file {
  //     //   bucket
  //     //   region
  //     //   key
  //     // }
  //     // updatedAt
  //   },
  //   // createdAt
  //   // updatedAt
  // };

  return (
    <div>
      <div>
        <Background myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox
          boxContent={
            <ContestPage1Card
              contestHeadline="Win a Baby"
              contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              buttonText="CONTINUE"
              contestDeadline="4/1/2021"
              contestImg="../baby.png"
              actionSpotifyPlay={true}
              actionSpotifyFollow={true}
              actionSpotifySave={true}
              actionStreetTeam={true}
              streetTeamUrl="www.modern-musician.com"
              spotifyPlayUrl="www.modern-musician.com"
              spotifyFollowPlaylistUrl="www.modern-musician.com"
              spotifyFollowArtistUrl="www.modern-musician.com"
              spotifySaveUrl="www.modern-musician.com"
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

export default ContestPage1;
