import React from 'react';

import FooterLinks from './FooterLinks';
// import OptinCard from './Cards/1_OptinCard';

function CenterBox({boxContent}) {
  return (
    <div className="center-box">
      {boxContent}
      <FooterLinks />
    </div>
  );
}

export default CenterBox;
