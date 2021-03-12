import React, { useState } from 'react';
import ActionPointsButton from '../Components/ActionPointsButton.js';

import SpotifyPlayBox from '../Components/SpotifyPlayBox';

import { FaSpotify } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';

//this is what the data looks like coming in
// actions: {
//     items: {
//       id: 'anitemid',
//       content: 'actionText1',
//       pointValue: '1',
//       contestID: 'somecontestid',
//       url: 'https://google.com',
//       // createdAt
//       // updatedAt
//     },

function ContestActions({ actions, completedActions }) {
  const [showSpotifyBox, setDisplay] = useState(false);
  const [buttonClickedSpotifyPlay, setClickedSpotifyPlay] = useState(false);
  const [buttonClickedSpotifyFollow, setClickedSpotifyFollow] = useState(false);

  //   .map((anObjectMapped, index) => {
  //     return (
  //         <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
  //             {anObjectMapped.name} - {anObjectMapped.email}
  //         </p>
  //     );
  // })

  const actionItems = actions.items;
  const enduserActions = completedActions.items;
  console.log('Enduser Actions are: ');
  console.log(enduserActions);
  console.log(enduserActions.findIndex(action => action.id == 'asdf8asdf0jad'));
  console.log(enduserActions.findIndex(action => action.id == 'a'));
  // index = a.findIndex(x => x.prop2 ==="yutu");

  const actionComponents = actionItems.map((itemMapped, index) => {
    return (
      <div key={index}>
        <div
          onClick={() => {
            setDisplay(!showSpotifyBox);
          }}
        >
          {/* TODO let's add another layer here to be able to take in the action type and build the ActionPointsButton */}
          {/* TODO -- I think we should move the icon, box color, and other style elements inside a middle component */}
          {/* <TypedActionPointsButton 
            preActionText=
            postActionText=
            actionType=
            pointValue=
          /> */}
          <ActionPointsButton
            text={
              enduserActions.findIndex(action => action.id === itemMapped.id) >=
              0
                ? itemMapped.postActionText ?? 'Played on Spotify'
                : itemMapped.preActionText ?? 'Play on Spotify'
            }
            icon={buttonClickedSpotifyPlay ? FaCheckCircle : FaSpotify}
            path=""
            points={itemMapped.pointValue ?? 20}
            textBoxColor={
              enduserActions.findIndex(action => action.id === itemMapped.id) >=
              0
                ? 'spotify-color-gradient clicked'
                : 'spotify-color-gradient'
            }
            pointsBoxColor={
              enduserActions.findIndex(action => action.id === itemMapped.id) >=
              0
                ? 'spotify-color clicked'
                : 'spotify-color'
            }
            buttonTextStyle={
              buttonClickedSpotifyPlay ? 'light clicked-text ' : 'light '
            }
            buttonIconStyle={
              buttonClickedSpotifyPlay ? 'light clicked-text ' : 'light '
            }
            heightclassName="button-small-height"
            pointsSize="button-points-total-action"
            type={itemMapped.actionType}
          />
        </div>
        {showSpotifyBox ? (
          <div
            onClick={() => {
              setClickedSpotifyPlay(true);
            }}
          >
            {' '}
            <SpotifyPlayBox />{' '}
          </div>
        ) : null}
        <div
          onClick={() => {
            setClickedSpotifyFollow(true);
          }}
        ></div>
      </div>
    );
  });

  return actionComponents;
}

export default ContestActions;
