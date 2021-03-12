import React from 'react';
// import styled from 'styled-components';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/4ContestPage1';

import { gql, useQuery } from '@apollo/react-hooks';
import { getContest } from '../graphql/queries';

function ContestPage1() {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  const id = '762be373-ae1d-45e2-aef2-08aebac72c75';
  // console.log(contestID);
  // const id = contestID;
  const { data, loading, error } = useQuery(gql(getContest), {
    variables: { id },
  });
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: ${error.message}</p>;
  }
  console.log(data);
  const contestData = data.getContest;

  const enduserData = {
    id: 'someenduserID',
    actions: {
      items: [
        {
          id: 'asdf8asdf0jad',
          content: 'actionText1',
          pointValue: '1',
          contestID: 'somecontestid',
          url: 'https://google.com',
          // createdAt
          // updatedAt
        },
      ],
      nextToken: 'somenextactiontoken',
    },
  };

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
        <Background
          myClass="background-wrapper"
          contestPictureUrl={contestData.picture.publicUrl}
        />
      </div>
      <div>
        <CenterBox
          boxContent={
            <ContestPage1Card
              contestHeadline={contestData.headline}
              contestDescription={contestData.contestDescription}
              buttonText="CONTINUE"
              contestDeadline={contestData.deadline}
              contestImg={contestData.picture.publicUrl}
              encouragementHeadline={contestData.encouragementHeadline}
              encouragementDescription={contestData.encouragementDescription}
              actions={contestData.actions}
              completedActions={enduserData.actions}
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

export default ContestPage1;
