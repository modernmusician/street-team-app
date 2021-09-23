import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import awsconfig from '../../aws-exports';
import { useParams } from 'react-router-dom';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

Amplify.configure(awsconfig);

const Footer = styled.footer({
  height: '50px',
  flexShrink: 0,
});

export const Login = () => {
  const { userRole } = useParams();
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  const [route, setRoute] = useState();

  // useEffect(() => {
  //   onAuthUIStateChange((nextAuthState, authData) => {
  //     setAuthState(nextAuthState);
  //     setUserId(authData);
  //   });
  // }, []);

  const notArtist = userRole !== 'artist';
  const referrerRoute = '/test/me/out';

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  console.log(location.state);
  console.log(history);

  const previousRoute = window.localStorage.getItem('route');
  console.log(previousRoute);

  if (previousRoute) {
    history.push(previousRoute);
    // setRoute(previousRoute);
  }

  const loginProps = {
    headerText: notArtist
      ? 'How can we reach you if you win?'
      : 'Create a Fan Action sequence',
    submitButtonText: 'Complete Registration',
    slot: 'sign-up',
    usernameAlias: 'email',
    formFields: [
      {
        type: 'name',
        label: notArtist ? 'Name' : 'Artist Name',
        placeholder: notArtist ? 'Enter your name' : 'Enter your artist name',
        required: true,
      },
      { type: 'email' },
      { type: 'password' },
      { type: 'phone_number' },
    ],
  };

  const federated = {
    facebookAppId: '1889301381171290', // login here https://developers.facebook.com/apps/
  };

  /// /secure/Artist/page - > not logged in

  return route ? <div> loading</div> : <div> page not found </div>;
};
//   return authState === AuthState.SignedIn && userId ? (
//     route ? (
//           <Redirect
//             to={{
//               pathname: route,
//               // search: "?utm=your+face"
//             }}
//           />):
//           <div> page not found </div>
//   ) : (
//     <div>
//     <button onClick={() => Auth.federatedSignIn({provider:"Facebook"})}>Sign In with FB</button>
//     <AmplifyAuthenticator initialAuthState="signup" federated={federated}>
//       <AmplifySignUp {...loginProps}/>
//     </AmplifyAuthenticator>
//     <button onClick={() => Auth.federatedSignIn()}>Sign In with AWS UI</button>
//     </div>
//   );
// };
