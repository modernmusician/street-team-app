import React, { Component } from 'react';
// import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';

const listContestDetails = `query listContestDetailss {
    listContestDetailss{
    items{
      id
      headline
      description
    }
  }
}`;

const addContest = `mutation createContestDetails($headline:String! $description: String! $landingButtonText: String!) {
  createContestDetails(input:{
    headline:$headline
    description:$description
    landingButtonText:$landingButtonText
  }){
    id
    headline
    description
    landingButtonText
  }
}`;

class App extends Component {
  contestMutation = async () => {
    const contestDetails = {
      headline: 'New Contest Baby',
      description: 'modern musician contests 4-eva!',
      landingButtonText: 'Enter Button',
    };

    const newContest = await API.graphql(
      graphqlOperation(addContest, contestDetails)
    );
    alert(JSON.stringify(newContest));
  };

  listQuery = async () => {
    console.log('listing contest details');
    const allContests = await API.graphql(graphqlOperation(listContestDetails));
    alert(JSON.stringify(allContests));
  };

  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <p> Click a button </p>
        <button onClick={this.listQuery}>GraphQL List Query</button>
        <button onClick={this.contestMutation}>GraphQL Contest Create</button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
