import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import React from 'react';
import { useParams } from 'react-router-dom';

export const Login = () => {
  const { userRole } = useParams();
  return (
    <AmplifyAuthenticator initialAuthState="signup">
      {userRole !== 'artist' ? (
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
      ) : (
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
      )}
    </AmplifyAuthenticator>
  );
};
