import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState("notStarted");
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const handleTodoChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    if (!text) return;

    const newTodo = {
      text: text,
      id: new Date().getTime(),
      detail: detail,
      status: "notStarted",
    };

    setTodos([...todos, newTodo]);

    setText("");
    setDetail("");
  };

  const handleDetailChange = (e) => {
    setDetail(e.target.value);
  };

  const handleStatusChange = (id, status) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.status = status;
        console.log("status=", status);
        console.log("todo.status=", todo.status);
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleDeleteClick = (id) => {
    // const deepCopy = todos.map((todo) => ({ ...todo }));
    // const newTodos = deepCopy.filter((todo) => {//?
    //   return todo.id !== id;
    // });
    const newTodos = todos.filter((todo) => {
      return todo.id !== id; //? Where are they?
    });
    setTodos(newTodos);
  };

  const handleEditTextChange = (id, text) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleEditDetailChange = (id, detail) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.detail = detail;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodos(
            todos.filter((todo) => todo.status === "notStarted")
          );
          break;

        case "inProgress":
          setFilteredTodos(
            todos.filter((todo) => todo.status === "inProgress")
          );
          break;

        case "done":
          setFilteredTodos(todos.filter((todo) => todo.status === "done"));
          break;

        default:
          setFilteredTodos(todos);
      }
    };
    filteringTodos();
  }, [filter, todos]); //?

  return (
    <div className="App">
      <h1>Todo</h1>

      <div className="App-content">
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

        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="notStarted">Not Started</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <ul>
          {filteredTodos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => {
                    handleEditTextChange(todo.id, e.target.value);
                  }}
                />

                <textarea
                  value={todo.detail}
                  onChange={(e) => {
                    handleEditDetailChange(todo.id, e.target.value);
                  }}
                />

                <select
                  value={todo.status} //!
                  onChange={(e) => {
                    handleStatusChange(todo.id, e.target.value);
                  }}
                >
                  <option value="notStarted">Not Started</option>
                  <option value="inProgress">In Progress</option>
                  <option value="done">Done</option>
                </select>

                <button onClick={() => handleDeleteClick(todo.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
