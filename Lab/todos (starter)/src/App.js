import "./styles.css";
import { useState, useReducer } from "react";
import TodoList from "./components/TodoList";

import { TodosContext } from './context'
import { reducer } from './reducer'

export default function App() {

  let [todos, dispatch] = useReducer(reducer, []);

  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodosContext.Provider value={{ dispatch }}>
          <TodoList
            todos={todos}
            listType={listType}
          />
      </TodosContext.Provider>

      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={() => {
        dispatch({ type: 'ADD', payload: input })
        setInput("");
      }}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}
