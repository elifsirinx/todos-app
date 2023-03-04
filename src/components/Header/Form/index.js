import { useState, useEffect } from "react";

function Form({ todos, setTodos }) {
  const initialTodoValue = "";
  const [todo, setTodo] = useState("");

  const useEffect =
    (() => {
      setTodo(initialTodoValue);
    },
    [todos]);

  const onChangeInput = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo == "") {
      return false;
    }
    setTodos([...todos, todo]);
    setTodo({ initialTodoValue });
    console.log(todo);
  };
  return (
    <div>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          name="todo"
          value={todo}
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Form;
