import React from 'react';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/5ReferralCard';

const contestData = {
  id: 'somecontestid',
  headline: 'THIS IS A HEADLINE',
  description: 'this is a description',
  landingButtonText: 'btn TEXT',
  deadline: '3/4/2021 18:00:00',
  // "artistID"
  artist: {
    id: 'artistID',
    name: 'BIGFAT JAMBAND',
    contests: {
      nextToken: 'sometoken',
    },
  },
  actions: {
    items: {
      id: 'anitemid',
      content: 'actionText1',
      pointValue: '1',
      contestID: 'somecontestid',
      url: 'https://google.com',
      // createdAt
      // updatedAt
    },
    nextToken: 'somenextactiontoken',
  },
  //need to build a URL from this picture. Why not just use the public S3 URL?
  picture: {
    publicUrl: '../logo192.png',
    // id
    // name
    // owner
    // visibility
    // createdAt
    // file {
    //   bucket
    //   region
    //   key
    // }
    // updatedAt
  },
  // createdAt
  // updatedAt
};

function ReferralPage() {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  // const id = 'someid';
  // const { data, loading, error } = useQuery(gql(getContest({ id: id })));
  // const contestData = data.getContest;

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
              contestHeadline="Win a Baby"
              contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              buttonText="CONTINUE"
              contestDeadline="12/27/2020"
              contestImg="../baby.png"
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

export default ReferralPage;
