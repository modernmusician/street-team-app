import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import awsconfig from '../../aws-exports';
import {SignInWithFacebook} from '../Login/FacebookLogin';

import { useHistory } from "react-router-dom";

import { Icon } from '../UI/Icon';

// TODO need to update the awsconfig onRedirectCallback dynamically based on environment variables
// copy the constant config (aws-exports.js) because config is read only. -- using location.href
var updatedConfig = awsconfig;
// // update the configUpdate constant with the good URLs
// console.log(updatedConfig);
// console.log(onRedirectCallback)
updatedConfig.oauth.redirectSignIn = 'https://b273-174-20-142-170.ngrok.io/login/';
updatedConfig.oauth.redirectSignOut = 'https://b273-174-20-142-170.ngrok.io/login/';
// console.log(updatedConfig);

Amplify.configure(updatedConfig);

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const Footer = styled.footer({
  height: '50px',
  flexShrink: 0,
});

const BodyContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #333333;
  color: ${({ color }) => color};
  font-size: 40px;
  font-weight: 500;
  margin: 60px 0 45px;
  padding: 37px 47px;
  text-align:center
`;

const StyledButtonInner = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 18px;
  }
`;

export const SecureViewWrapper = ({ userRole, children }) => {

  const path=window.location.pathname;
  if(path!='/login/'){
    //update the most recent page route so that when we return from login, we can redirect
    window.localStorage.setItem('route',path);
  }

  console.log("hello from secure wrapper")

  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

  const signUpProps = {
    headerText: userRole==='admin'
      ? 'Create a Fan Action sequence'
      : 'Or sign up with your email',
    submitButtonText: 'Complete Registration',
    slot: 'sign-up',
    usernameAlias: 'email',
    formFields: [
      {
        type: 'name',
        label: userRole==='admin' ? 'Artist Name' : 'Name',
        placeholder: userRole==='admin' ? 'Enter your artist name' : 'Enter your name',
        required: true,
      },
      { type: 'email' },
      { type: 'password' },
      { type: 'phone_number' },
    ],
  };

  const federated = {
    facebookAppId: '674030226824129', // login here https://developers.facebook.com/apps/
  };

  return authState === AuthState.SignedIn && userId ? (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '1 0 auto' }}>{children}</div>
      <Footer>
        {/* <AmplifySignOut /> */}
        <Button onClick={checkUser}>Check User</Button>
        <Button onClick={signOut}>Sign Out</Button>
      </Footer>
    </div>
  ) : (
    <BodyContainer onClick={() => Auth.federatedSignIn({provider:"Facebook"})}>
      <StyledButton
      bgColor='blue'
      color='white'
      type="button"
      onClick={() => Auth.federatedSignIn({provider:"Facebook"})}
      >
        <StyledButtonInner>
          <span>
            <Icon color="white" name='FaFacebookF' size={70} />
          </span>
          <div>Continue with Facebook</div>
        </StyledButtonInner>
      </StyledButton>
    
    <AmplifyAuthenticator initialAuthState="signup">
      <AmplifySignUp {...signUpProps}/>
    </AmplifyAuthenticator>
    </BodyContainer>
  );
};

SecureViewWrapper.propTypes = {
  userRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
