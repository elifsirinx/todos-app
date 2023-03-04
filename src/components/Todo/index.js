import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Write a thing!",
      completed: false,
    },
    {
      id: 2,
      text: "Write second thing!",
      completed: true,
    },
  ]);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="main-container">
      Todo
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add todo Item" />
      <button>Add</button>
    </div>
  );
}

export default Todo;
