import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Filter from "./Filter";

function Header() {
  const [todos, setTodos] = useState(["Do your work!", "Do that!", "Awesome!"]);
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
