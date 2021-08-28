import React, { useState } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (evento) => {
    setInput(evento.target.value);
  }

  const addTodo = (evento) => {
    evento.preventDefault();
    const newTodos = [...todos, input];
    setTodos(newTodos);
    console.log(todos);
    setInput('');
  }

  const deleteElement = (indice) => {
    setTodos(
      todos.filter((numero, i) => indice !== i)
    )
  }

  return (
    <div className="todo-app">
      <h1>What's the Plan For Today?</h1>
      <form className="todo-form" onSubmit={addTodo} >
        <input type="text" className="todo-input" placeholder="Add a Todo" onChange={handleChange} value={input} type="text" />
        <button className="todo-button" type="submit" id="button-addon2">Add todo</button>
      </form>

      <ul>
        {todos.map((todo, index) =>
          <li className="todo-row" key={index}>{todo}
            {/* <span className="btn-close" style={{ cursor: 'pointer' }} onClick={() => {
              deleteElement(index);}}>
            </span> */}
            <i className="far fa-window-close icons" onClick={() => {
              deleteElement(index);}}>
            </i>
          </li>)
        }
      </ul>

    </div>
  );
}

export default App;
