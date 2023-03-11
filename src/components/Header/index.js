import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Filter from "./Filter";

function Header() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Write a thing!",
      completed: false,
    },
    {
      id: 2,
      text: "Write second thing!",
      completed: false,
    },
  ]);

  const todosCount = todos.length;

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <h1>HEADER</h1>
      <Form setTodos={setTodos} todos={todos} />
      <List setTodos={setTodos} todos={todos} todosCount={todosCount} />
      <Filter setTodos={setTodos} todos={todos} todosCount={todosCount} />
    </div>
  );
}

export default Header;
