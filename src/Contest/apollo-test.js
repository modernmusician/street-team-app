import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { Auth } from 'aws-amplify';

import { listContests } from './graphql/queries';

const getCreds = async () => {
  return await Auth.currentSession()
    .then(data => {
      return data.idToken.jwtToken;
    })
    .catch(err => console.log(err));
};

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: getCreds(),
  },
});

client
  .query({
    query: gql(listContests),
  })
  .then(({ data }) => {
    console.log(data);
  });

ReactDOM.render(<App />, document.getElementById('root'));
