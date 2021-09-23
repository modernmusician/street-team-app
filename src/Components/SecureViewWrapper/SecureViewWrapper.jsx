import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import awsconfig from '../../aws-exports';
import { useHistory } from 'react-router-dom';
import { Icon } from '../UI/Icon';
import { PageContainer, PageHeader } from '../Page';
import { FanMagnetButton } from '../UI';

// TODO need to update the awsconfig onRedirectCallback dynamically based on environment variables
// copy the constant config (aws-exports.js) because config is read only. -- using location.href
const updatedConfig = awsconfig;
// // update the configUpdate constant with the good URLs
// console.log(updatedConfig);
// console.log(onRedirectCallback)
updatedConfig.oauth.redirectSignIn =
  'https://b273-174-20-142-170.ngrok.io/login/';
updatedConfig.oauth.redirectSignOut =
  'https://b273-174-20-142-170.ngrok.io/login/';
// console.log(updatedConfig);

Amplify.configure(updatedConfig);

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

const Footer = styled.footer({
  height: '50px',
  flexShrink: 0,
});

const StyledButton = styled(FanMagnetButton)`
  padding: 35px 21px;
  margin: 10px 0;
`;

const ButtonInnerText = styled.div`
  text-align: left;
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: bold;
`;

const StyledPageHeader = styled(PageHeader)`
  font-size: 60px;
`;

const OrBlock = styled.div`
  padding: 10px 0;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 24px;
`;

const Terms = styled.div`
  border-top: 1px solid #e6e6e6;
  padding-top: 27px;
  margin-top: 23px;
  text-align: center;

  a {
    color: white;
    font-family: 'Open Sans';
    font-size: 18px;
    text-decoration: underline;
  }
`;

export const SecureViewWrapper = ({ userRole, children }) => {
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();
  const [showSignupForm, setShowSignupForm] = useState(false);

  const path = window.location.pathname;
  if (path !== '/login/') {
    // update the most recent page route so that when we return from login, we can redirect
    window.localStorage.setItem('route', path);
  }

  console.log('hello from secure wrapper');

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

  const signUpProps = {
    headerText:
      userRole === 'admin'
        ? 'Create a Fan Action sequence'
        : 'Or sign up with your email',
    submitButtonText: 'Complete Registration',
    slot: 'sign-up',
    usernameAlias: 'email',
    formFields: [
      {
        type: 'name',
        label: userRole === 'admin' ? 'Artist Name' : 'Name',
        placeholder:
          userRole === 'admin' ? 'Enter your artist name' : 'Enter your name',
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
    <PageContainer pageContentPadding="50px 95px">
      {!showSignupForm && (
        <React.Fragment>
          <StyledPageHeader>Unlock Your Free Gift</StyledPageHeader>
          <StyledButton
            active
            activeBgColor="transparent linear-gradient(90deg, #4363A7 0%, #345BAC 88%, #3357A5 100%) 0% 0% no-repeat padding-box;"
            activeColor="white"
            handleClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
          >
            <span>
              <Icon color="white" name="FaFacebook" size={70} />
            </span>
            <div>
              <ButtonInnerText>
                Continue with
                <br /> Facebook
              </ButtonInnerText>
            </div>
          </StyledButton>
          <OrBlock>or</OrBlock>
          <StyledButton
            active
            activeColor="white"
            activeBgColor="transparent linear-gradient(90deg, #404040 0%, #393838 92%, #363636 100%) 0% 0% no-repeat padding-box;"
            handleClick={() => setShowSignupForm(true)}
          >
            <span>
              <Icon color="white" name="FaEnvelope" size={70} />
            </span>
            <div>
              <ButtonInnerText>
                Connect With
                <br /> Email
              </ButtonInnerText>
            </div>
          </StyledButton>
          <Terms>
            <a href="#">
              By accepting this gift, I acknowledge that I have reviewed and
              agreed to our Terms of Use, Contest Rules, and Privacy Policy.
            </a>
          </Terms>
        </React.Fragment>
      )}
      {showSignupForm && (
        <AmplifyAuthenticator initialAuthState="signup">
          <AmplifySignUp {...signUpProps} />
        </AmplifyAuthenticator>
      )}
    </PageContainer>
  );
};

SecureViewWrapper.propTypes = {
  userRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
