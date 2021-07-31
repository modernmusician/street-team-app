import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ApolloClient, InMemoryCache } from '@apollo/client';
// NOTE: the default AWSAppSyncClient uses an outdated apollo-client dependancy
// we're building a custom client instead - see this article https://medium.com/@guillac124/create-your-custom-apollo-client-for-aws-appsync-to-use-hooks-2d5cbce29db5
import { ApolloProvider } from '@apollo/react-hooks';
import Auth from '@aws-amplify/auth';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { createAuthLink } from 'aws-appsync-auth-link';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import awsConfig from './aws-exports';
import { ThemeProvider } from './Components/ThemeProvider';

const url = awsConfig.aws_appsync_graphqlEndpoint;
const region = awsConfig.aws_appsync_region;
const auth = {
  type: awsConfig.aws_appsync_authenticationType,
  jwtToken: async () => {
    try {
      return (await Auth.currentSession()).getIdToken().getJwtToken();
    } catch (e) {
      console.error(e);
      return ''; // In case you don't get the token, hopefully that is a public api and that should work with the API Key alone.
    }
  },
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
