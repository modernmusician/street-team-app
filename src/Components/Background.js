import React from 'react';

import ContestPicture from './ContestPicture';
import Logo from './Logo';

function Background({ myClass, contestPictureUrl }) {
  return (
    <div>
      <div
        className={myClass}
        // style="background-image="{contestPictureUrl} //TODO need to use contestPictureUrl somehow here
        style={{
          backgroundImage: `url(${contestPictureUrl})`,
        }}
      >
        <ContestPicture />
      </div>
      <div>
        <Logo />
      </div>
    </div>
  );
}

export default Background;
