import React from 'react';
import styled from 'styled-components'

import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import ContestPage1Card from '../Components/Cards/4ContestPage1';

function ContestPage1() {
  return (
    <div>
      <div>
        <Background myClass="background-wrapper" />
      </div>
      <div>
        <CenterBox 
        boxContent=
        {
          <ContestPage1Card 
            contestHeadline="Win a Baby"
            contestDescription="Enter for a chance to win a happy, healthy baby girl!"
            buttonText="CONTINUE"
            contestDeadline="4/1/2021"
            contestImg="../baby.png"
            actionSpotifyPlay= {true}
            actionSpotifyFollow={true}
            actionSpotifySave={true}
            actionStreetTeam={true}
          />
        }
        displayFooter={true}
        />
      </div>
    </div>
  );
}

export default ContestPage1;
