import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleTodoChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    if (!text) return;

    const newTodo = {
      text: text,
      id: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);

    setText("");
  };

  const handleDeleteClick = (id) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    // const newTodos = deepCopy.filter((todo) => {//?
    //   return todo.id !== id;
    // });
    const newTodos = todos.filter((todo) => {
      return todo.id !== id; //? Where are they?
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>

        <h2>Title</h2>
        <input
          type="text"
          className=""
          value={text}
          onChange={handleTodoChange}
        />
        <button onClick={handleAddClick}>Add</button>
        <div className="App-content">
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => handleDeleteClick(todo.id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
