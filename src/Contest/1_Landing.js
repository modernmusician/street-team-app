import React from 'react';
import styled from 'styled-components';

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import OptinCard from '../Components/Cards/1_OptinCard';

import { gql, useQuery } from '@apollo/react-hooks';
import { getContest, getEnduser } from '../graphql/queries';

function Landing() {
  // this needs to use the contest id, which right now hard coded, going to be from the incoming path eventually will be from a subdomain or something
  const contestId = '64d117f6-1478-4795-af85-f1e43999454d';
  const enduserId = '762be373';
  console.log(contestId);
  // const id = contestID;
  console.log(getContest);
  const {
    data: contestData,
    loading: contestLoading,
    error: contestError,
  } = useQuery(gql(getContest), {
    variables: { id: contestId },
  });

  // const {
  //   data: enduserData,
  //   loading: enduserLoading,
  //   error: enduserError,
  // } = useQuery(gql(getEnduser), {
  //   variables: { id: enduserId },
  // });

  if (contestLoading) {
    // if (contestLoading || enduserLoading) {
    return <p>Loading...</p>;
  }
  // if (contestError || enduserError) {
  if (contestError) {
    return (
      <div>
        <p>Contest Data Error: ${contestError.message} </p>
        {/* <p>User Data Error: ${enduserError.message} </p> */}
      </div>
    );
  }

  console.log(contestData);
  const contestInfo = contestData.getContest;
  // console.log(enduserData);
  // const enduserInfo = enduserData.getEnduser;

  const formattedDeadline = contestInfo.deadline.replace(/-/g, '/');
  console.log(formattedDeadline);

  return (
    <div>
      <Background myClass="background-wrapper" />
      <div>
        <CenterBox
          boxContent={
            <OptinCard
              // contestHeadline="Win a Baby"
              // contestDescription="Enter for a chance to win a happy, healthy baby girl!"
              // buttonText="Enter to Win >"
              // contestDeadline="4/13/2021"
              // contestImg="../baby.png"
              contestHeadline={contestInfo.headline}
              contestDescription={contestInfo.description}
              buttonText={contestInfo.landingButtonText}
              contestDeadline={formattedDeadline} //TODO deadline needs to be UTC
              contestImg={contestInfo.picture.publicUrl}
            />
          }
          displayFooter={true}
        />
      </div>
    </div>
  );
}

export default Landing;
