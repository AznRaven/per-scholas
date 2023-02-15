import "./index.css";
// import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./components/todo";

// export default function App() {
//   return <TodosList 
//   todos={todos
//     listType
//   } />;
// }

export default function App() {
  return (
    <div>
        <h1>Todos ({listType})</h1>
        <ul>
          {filteredTodos.map((item) => (
            <Todo/>
          ))}
        </ul>
        <input value={input} onChange={handleChange} />
        <button onClick={addToList}>Submit</button>
        <br />
        <br />
        <button onClick={() => setListType("all")}>All</button>
        <button onClick={() => setListType("complete")}>Completed</button>
        <button onClick={() => setListType("incomplete")}>Incomplete</button>
      </div>
  )
}
