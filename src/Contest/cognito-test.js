import React, { Component } from 'react';
// import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { Auth } from 'aws-amplify';

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`;

// src/App.js

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

function LoginView(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../baby.png" className="App-logo" alt="logo" />
        <p>This is a page showing that we have a login</p>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  );
}

export default LoginView;

// class GraphQLApp extends Component {
//   todoMutation = async () => {
//     const todoDetails = {
//       name: 'Party tonight!',
//       description: 'Amplify CLI rocks!',
//     };

//     const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
//     alert(JSON.stringify(newTodo));
//   };

//   listQuery = async () => {
//     console.log('listing todos');
//     const allTodos = await API.graphql(graphqlOperation(listTodos));
//     alert(JSON.stringify(allTodos));
//   };

//   render() {
//     return (
//       <div className="App">
//         <AmplifySignOut />
//         <p> Click a button </p>
//         <button onClick={this.listQuery}>GraphQL List Query</button>
//         <button onClick={this.todoMutation}>GraphQL Todo Mutation</button>
//       </div>
//     );
//   }
// }

// export default withAuthenticator(GraphQLApp, true);
