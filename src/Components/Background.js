import React from 'react';

import ContestPicture from './ContestPicture';
import Logo from './Logo';

function Background() {
  return (
    <div>
      <div className="background-wrapper">
        <ContestPicture />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default Background;
