import { useState, useEffect } from "react";

function Form({ todos, setTodos }) {
  const initialTodoValue = { id: 0, text: "", completed: false };
  const [todo, setTodo] = useState({ text: "" });

  const useEffect =
    (() => {
      setTodo(initialTodoValue);
    },
    [todos]);

  const onChangeInput = (e) => {
    setTodo({
      id: todos.length !== 0 ? todos.slice(-1)[0].id + 1 : 0,
      text: e.target.value,
      completed: false,
    });
    console.log("ID SLICE", todos.slice(-1)[0].id);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo == "") {
      return false;
    }
    setTodos([...todos, todo]);
    setTodo(initialTodoValue);
    console.log(todo);
  };
  return (
    <div>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          name="todo"
          value={todo.text}
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Form;
