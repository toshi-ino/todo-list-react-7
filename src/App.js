import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState("Not Started");

  const handleTodoChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    if (!text) return;

    const newTodo = {
      text: text,
      id: new Date().getTime(),
      detail: detail,
      status: status,
    };

    setTodos([...todos, newTodo]);

    setText("");
    setDetail("");
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
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

        <h2>Details</h2>
        <textarea value={detail} onChange={handleDetailChange}>
          {detail}
        </textarea>

        <button onClick={handleAddClick}>Add</button>
        <div className="App-content">
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                  {todo.detail}

                  <select
                    onChange={(e) => {
                      setStatus(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option value="notStarted">Not Started</option>
                    <option value="inProgress">In Progress</option>
                    <option value="done">Done</option>
                  </select>

                  {/* {console.log(e.target.valuedo)} */}
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
