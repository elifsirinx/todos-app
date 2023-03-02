import React from "react";

function List({ todos, setTodos }) {
  const deleteByValue = (value) => {
    setTodos((oldValues) => {
      return oldValues.filter((todo) => todo !== value);
    });
  };

  return (
    <div>
      <h1>LIST</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
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
