import { useState } from "react";

function List({ todos, setTodos, todosCount }) {
  const [status, setStatus] = useState("completed");
  todosCount = todos.length;

  const deleteByValue = (value) => {
    setTodos((oldValues) => {
      return oldValues.filter((todo) => todo !== value);
    });
  };

  const handleChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setStatus("completed");
      console.log("completed");
    } else {
      setStatus("on-hold");
      console.log("on-hold");
    }
  };

  return (
    <div>
      <h1>LIST</h1>
      <h2>{status}</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={status}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={handleChange}
              />
              <label>{todo}</label>
              <button
                className="destroy"
                onClick={() => deleteByValue(todo)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
