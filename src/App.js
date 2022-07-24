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
    setTodos([...todos, text]);

    setText("");
  };

  const handleDeleteClick = () => {
    console.log("click");
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
            {todos.map((todo, id) => {
              console.log(id);
              return (
                <li key={id}>
                  {todo}
                  <button onClick={handleDeleteClick}>Delete</button>
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
