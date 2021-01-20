import './App.css';

import { Router } from '@reach/router';
import React, { useState } from 'react';

import Registration from './Contest/2_Registration';
import Landing from './Contest/1_Landing';
import EmailRegistration from './Contest/3_EmailRegistration';
import ContestPage1 from './Contest/4_ContestPage1';
import ReferralPage from './Contest/5_ReferralPage';
import LoginView from './Contest/cognito-test';
import GraphQLApp from './Contest/graphql-test';
import DisplayArtist from './Components/displayArtists';
import DisplayContest from './Components/displayContests';
import DeleteContest from './Components/deleteContest';

// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
import { deleteContest } from './graphql/mutations';

function App() {
  // const [todoName, setTodoName] = useState('')
  // const [todoItems, setTodoItems] = useState([])

  // const addTodo = async () => {
  //   await API.graphql(
  //     graphqlOperation(createTodo, { input: { name: todoName } })
  //   )
  //   setTodoName('')
  //   updateTodos()
  // }

  // const handleChange = (evt) => {
  //   setTodoName(evt.target.value)
  // }

  // const updateTodos = async () => {
  //   const allTodos = await API.graphql(graphqlOperation(listTodos))
  //   setTodoItems(allTodos.data.listTodos.items)
  // }

  // updateTodos()

  // <Button> Counter +1 </Button>

  // counter items

  return (
    <Router>
      <Landing path="/" />
      <LoginView path="/login" />
      <Registration path="/registration" />
      <EmailRegistration path="/register-email" />
      <ContestPage1 path="/contest-page-1" />
      <ReferralPage path="/referral" />
      <GraphQLApp path="/graphQL" />
      <DisplayArtist path="/artists" />
      <DeleteContest path="/delete-contest" />
      <DisplayContest path="/contests" />
    </Router>
    // <div>
    //   <div>
    //   <Background />
    //   </div>
    //   <div>
    //     <CenterBox />
    //   </div>
    // </div>
  );
}

export default App;
