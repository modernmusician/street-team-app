import React from 'react';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import OptinCard from '../Components/Cards/1_OptinCard';

import { getContest } from '../graphql/queries';
import { gql, useQuery } from '@apollo/react-hooks';

function Landing({ contestID }) {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const id = '762be373-ae1d-45e2-aef2-08aebac72c75';
  console.log(contestID);
  const id = contestID;
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

  // Test Data
  // const contestData = {
  //   id: 'somecontestid',
  //   headline: 'THIS IS A HEADLINE',
  //   description: 'this is a description',
  //   landingButtonText: 'btn TEXT',
  //   deadline: '3/4/2021 18:00:00',
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
      <Background
        myClass="background-wrapper"
        contestPictureUrl={
          contestData?.picture?.publicUrl
            ? contestData.picture.publicUrl
            : '../baby.png'
        } // this is ternanry checks if publicUrl is null (or anything nested above that), and if it is returns the default
      />
      <div>
        <CenterBox
          boxContent={
            <OptinCard
              // contestHeadline="Win a Baby"
              // contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              // buttonText="Enter to Win >"
              // contestDeadline="4/13/2021"
              // contestImg="../baby.png"
              contestHeadline={contestData.headline}
              contestDescription={contestData.description}
              buttonText={contestData.landingButtonText}
              contestDeadline={contestData.deadline} //TODO deadline needs to be UTC
              contestImg={
                contestData?.picture?.publicUrl
                  ? contestData.picture.publicUrl
                  : '../baby.png'
              }
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

export default Landing;
