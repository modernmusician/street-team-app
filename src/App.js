import OptinCard from "./Components/OptinCard";
import Background from "./Components/Background";
import CenterBox from "./Components/CenterBox";

import Landing from "./Contest/Landing";
import Contest from "./Contest/Contest";

import React, { useState } from 'react';
import './App.css';
// import { API, graphqlOperation } from "aws-amplify";
// import { createTodo } from "./graphql/mutations";
// import { listTodos } from "./graphql/queries";
import sum from './sum';

import { Router, Link } from "@reach/router";


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

  //counter items
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(sum(number, 1));
  }


  return (
    <Router>
         <Landing path="/" />
         <Contest path="contest" />
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

