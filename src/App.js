import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    setLists([...lists, text]);
    console.log([...lists, text]);
    setText("");
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
          onChange={handleTextChange}
        />
        <button onClick={handleAddClick}>Add</button>
        <div className="App-content">
          <ul>
            {lists.map((list, id) => {
              console.log(id);
              return <li key={id}>{list}</li>;
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
