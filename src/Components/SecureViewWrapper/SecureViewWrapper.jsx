import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

const Footer = styled.footer({
  height: '50px',
  flexShrink: 0,
});

export const SecureViewWrapper = ({ userRole, children }) => {
  const [authState, setAuthState] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

  const signUpProps = {
    headerText: userRole
      ? 'Create a Fan Action sequence'
      : 'How can we reach you if you win?',
    submitButtonText: 'Complete Registration',
    slot: 'sign-up',
    usernameAlias: 'email',
    formFields: [
      {
        type: 'name',
        label: userRole ? 'Artist Name' : 'Name',
        placeholder: userRole ? 'Enter your artist name' : 'Enter your name',
        required: true,
      },
      { type: 'email' },
      { type: 'password' },
      { type: 'phone_number' },
    ],
  };

  return authState === AuthState.SignedIn && userId ? (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '1 0 auto' }}>{children}</div>
      <Footer>
        <AmplifySignOut />
      </Footer>
    </div>
  ) : (
    <AmplifyAuthenticator initialAuthState="signup">
      <AmplifySignUp {...signUpProps} />
    </AmplifyAuthenticator>
  );
};

SecureViewWrapper.propTypes = {
  userRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
