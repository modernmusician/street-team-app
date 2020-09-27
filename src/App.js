import './App.css';

import { Router } from '@reach/router';
import React, { useState } from 'react';

import Registration from './Contest/2_Registration';
import Landing from './Contest/1_Landing';
import EmailRegistration from './Contest/3_EmailRegistration'
// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
import sum from './sum';

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
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(sum(number, 1));
  }

  return (
    <Router>
      <Landing path="/register-email" />
      <Registration path="/registration" />
      <EmailRegistration path="/" />
      
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
