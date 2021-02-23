import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// NOTE: the default AWSAppSyncClient uses an outdated apollo-client dependancy
//  we're building a custom client instead - see this article https://medium.com/@guillac124/create-your-custom-apollo-client-for-aws-appsync-to-use-hooks-2d5cbce29db5

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { createAuthLink } from 'aws-appsync-auth-link';
import { createHttpLink } from 'apollo-link-http';
import aws_config from './aws-exports';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const url = aws_config.aws_appsync_graphqlEndpoint;
const region = aws_config.aws_appsync_region;
const auth = {
  type: aws_config.aws_appsync_authenticationType,
  apiKey: aws_config.aws_appsync_apiKey,
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
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
