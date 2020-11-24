import React, { useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { createTodo } from '../graphql/mutations';
// import { listTodos } from '../graphql/queries';
// import sum from '../sum';


export default function Landing({ artist, contestName, contestDescription, enterText }) {

//     //todo items
//   const [todoName, setTodoName] = useState('');
//   const [todoItems, setTodoItems] = useState([]);

//   const addTodo = async () => {
//     await API.graphql(
//       graphqlOperation(createTodo, { input: { name: todoName } })
//     );
//     setTodoName('');
//     updateTodos();
//   };

//   const handleChange = evt => {
//     setTodoName(evt.target.value);
//   };

//   const updateTodos = async () => {
//     const allTodos = await API.graphql(graphqlOperation(listTodos));
//     setTodoItems(allTodos.data.listTodos.items);
//   };

//   updateTodos();

//   //counter items
//   const [number, setNumber] = useState(0);

//   function handleClick() {
//     setNumber(sum(number, 1));
//   }

  return(
  <div>
    <h1>{contestName}</h1>
    <h3>{contestDescription}</h3>

    <p>
        CONTEST ENDS IN: <i>HH:MM:SS</i>
      </p>
      {/* <input type="text" value={todoName} onChange={handleChange} />

      <button onClick={addTodo}>Add an Item to this List</button>

      <ul>
        {todoItems.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>

      <button className="increment-button" onClick={handleClick}>
        +1 Counter
      </button>
      <p className="number">{number}</p> */}

      <a className="primary-action-button" href="https://www.modern-musician.com/">
            {enterText}
      </a>
  </div>
  )
};
