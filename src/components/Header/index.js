import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function Header() {
  const [todos, setTodos] = useState(["Do your work!", "Do that!", "Awesome!"]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <h1>HEADER</h1>
      <Form setTodos={setTodos} todos={todos} />
      <List setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default Header;
