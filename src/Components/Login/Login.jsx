import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import React from 'react';
import { useParams } from 'react-router-dom';

export const Login = () => {
  const { userRole } = useParams();

  const notArtist = userRole !== 'artist';

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

  return (
    <AmplifyAuthenticator initialAuthState="signup">
      <AmplifySignUp {...loginProps} />
    </AmplifyAuthenticator>
  );
};
