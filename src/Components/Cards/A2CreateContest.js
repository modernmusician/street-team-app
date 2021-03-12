import React, { useState } from 'react';

import NavbarCreateProject from '../ArtistComponents/NavbarCreateProject';
import ConnectAccount from '../ArtistComponents/RightBoxes/ConnectAccount';
import EnterDetails from '../ArtistComponents/RightBoxes/EnterDetails';

const TABS = {
  'connect-account': <ConnectAccount />,
  'enter-details': <EnterDetails />,
  'fan-actions': null,
  'add-integrations': null,
  'review-contest': null,
};

function CreateContest({
  contestHeadline,
  contestDescription,
  buttonText,
  contestDeadline,
  contestImg,
}) {
  const [selectedTab, setSelectedTab] = useState('enter-details');

  return (
    <div className="artist-wrapper">
      {' '}
      <hr className="navbar-divider" />
      <div className="create-contest-wrapper">
        <div className="create-contest-left-container">
          <NavbarCreateProject
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
        <div className="create-contest-right-container">
          <div className="create-contest-right-box">{TABS[selectedTab]}</div>
        </div>
      </div>
    </div>
  );
}

export default CreateContest;
