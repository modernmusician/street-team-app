import React from 'react';
import styled from 'styled-components'


import Background from '../Components/Background';
import CenterBox from '../Components/CenterBox';
import OptinCard from '../Components/Cards/1_OptinCard'
function Landing() {
  return (
    <div>
      <Background />
      <div>
        <CenterBox 
        boxContent=
        {
          <OptinCard 
            contestHeadline="Win a Baby"
            contestDescription="Enter for a chance to win a happy, healthy baby girl!"
            buttonText="Enter to Win >"
            contestDeadline="12/27/2020"
            contestImg="../baby.png"
          />
        }
        />
      </div>
    </div>
  );
}

export default Landing;
