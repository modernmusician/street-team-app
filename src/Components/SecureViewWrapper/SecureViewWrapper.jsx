import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import PropTypes from 'prop-types';
import React from 'react';

import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

export const SecureViewWrapper = ({ userRole, children }) => {
  const [authState, setAuthState] = React.useState();
  const [userId, setUserId] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && userId ? (
    <div>
      {children}
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator initialAuthState="signup">
      {userRole === 'admin' ? (
        <AmplifySignUp
          headerText="Create a Fan Action sequence"
          submitButtonText="Complete Registration"
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            // { type: "username" },
            {
              type: 'name',
              label: 'Artist Name',
              placeholder: 'Enter your artist name',
              required: true,
            },
            { type: 'email' },
            { type: 'password' },
            { type: 'phone_number' },
          ]}
        />
      ) : (
        <AmplifySignUp
          headerText="How can we reach you if you win?"
          submitButtonText="Complete Registration"
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            // { type: "username" },
            {
              type: 'name',
              label: 'Name',
              placeholder: 'Enter your name',
              required: true,
            },
            { type: 'email' },
            { type: 'password' },
            { type: 'phone_number' },
          ]}
        />
      )}
    </AmplifyAuthenticator>
  );
};

SecureViewWrapper.propTypes = {
  userRole: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
