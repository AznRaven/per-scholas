import { TodosContext } from '../context'
import { useContext } from 'react'

function Todo({ item }) {

  const { dispatch } = useContext(TodosContext)

  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => dispatch({ type: 'COMPLETE', payload: item.id })}
      />
      {item.text}
      <button onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>x</button>
    </li>
  );
}

export default Todo;
