import React, { useState } from 'react';
import './App.css';

import { API, graphqlOperation } from "aws-amplify"
import { createTodo } from "./graphql/mutations"
import { listTodos } from "./graphql/queries"
import sum from './sum';

function App() {
  //todo items
  const [todoName, setTodoName] = useState('')
  const [todoItems, setTodoItems] = useState([])

  const addTodo = async () => {
    await API.graphql(
      graphqlOperation(createTodo, { input: { name: todoName } })
    )
    setTodoName('')
    updateTodos()
  }

  const handleChange = (evt) => {
    setTodoName(evt.target.value)
  }

  const updateTodos = async () => {
    const allTodos = await API.graphql(graphqlOperation(listTodos))
    setTodoItems(allTodos.data.listTodos.items)
  }

  updateTodos()

  //counter items
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(sum(number, 1));
  }


  return (
    <div className="App">
      <img class="App-logo" alt="baby" src="../baby.png"></img>
      <h1>Win a Baby</h1>
      <h3>Enter for a chance to win a happy, healthy baby girl</h3>

      <p>CONTEST ENDS IN: <i>HH:MM:SS</i></p>
      <input type="text" value={todoName} onChange={handleChange} />

      <button onClick={addTodo}>Add an Item to this List</button>

      <ul>
        {todoItems.map((item) => {
          return <li key={item.id}>{ item.name }</li>
        })}
      </ul>

      <button className="increment-button" onClick={handleClick}>
          +1 Counter
      </button>
      <p className="number">{number}</p>
    </div>
  );
}

export default App;