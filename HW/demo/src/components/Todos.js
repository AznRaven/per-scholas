import { useState } from "react";

function Todos(){
    let [todos, setTodos] = useState([]);
    let [input, setInput] = useState("");
    let [listType, setListType] = useState("all");
  
    function addToList() {
      let item = {
        text: input,
        completed: false,
        id: crypto.randomUUID() // 2188jd-293483-dfllkaksldf
      };
  
      // let newTodos = [...todos]
      // newTodos.push(item)
  
      setTodos([...todos, item]);
      setInput("");
    }
  
    function handleChange(event) {
      setInput(event.target.value);
    }
  
    function deleteTodo(id) {
      // make a new copy of the todos array
      // let newTodos = [...todos];
  
      // // locate the item in the todos array by its index
      // // let index = newTodos.findIndex((item) => {
      // //   if (item.id === id) {
      // //     return true
      // //   } else {
      // //     return false
      // //   }
      // // })
      // let index = newTodos.findIndex((item) => item.id === id);
  
      // // remove an item at the index (with splice)
      // newTodos.splice(index, 1);
  
      // // use the setState function (setTodos) to update the state
      // setTodos(newTodos);
  
      // let newTodos = todos.filter(item => {
      //   if (item.id !== id) {
      //     return true
      //   } else {
      //     return false
      //   }
      // })
      let newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);
    }
  
    function completeTodo(id) {
      // make a new copy
      // let newTodos = [...todos];
  
      // locate the item in the todos array by its index
      // let index = newTodos.findIndex((item) => item.id === id);
  
      // changing the completed property of a specific item (using the index)
      // newTodos[index].completed = !newTodos[index].completed;
  
      // if (newTodos[index].completed === true) {
      //   newTodos[index].completed = false
      // } else {
      //   newTodos[index].completed = true
      // }
  
      // use the setState function to update the state
  
      // setTodos(todos.map(x => {
      //   if (x.id === id) {
      //     x.completed = !x.completed
      //   }
      //   return x
      // }));
  
      setTodos(
        todos.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x))
      );
    }
  
    // before the JSX, use the listType to filter our todos

  
    return (
      <div>
        <h1>Todos ({listType})</h1>
        <ul>
          {filteredTodos.map((item) => (
            <li key={item.id} style={{ listStyle: "none" }}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => completeTodo(item.id)}
              />
              {item.text}
              <button onClick={() => deleteTodo(item.id)}>x</button>
            </li>
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
    );
}

export default Todos;