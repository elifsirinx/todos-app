import { useState } from "react";

function List({ todos, setTodos, todosCount }) {
  const [status, setStatus] = useState("completed");
  todosCount = todos.length;
  const [filterTodos, setFilterTodos] = useState([]);

  const handleCompleted = () => {
    setFilterTodos([todos]);
    console.log("FILTER TODOS : ", filterTodos);
    const filtered = todos.filter((todo) => todo.completed === true);
    setFilterTodos(filtered);
    console.log("filter ", filtered);
  };

  // const deleteByValue = (value) => {
  //   setTodos((oldValues) => {
  //     return oldValues.filter((todo) => todo !== value);
  //   });
  // };

  const deleteById = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const deleteByID = (id) => {
    const tempTodo = todos.filter((todo) => todo.id !== id); // this will remove the item which matches the id
    setTodos(tempTodo);
  };
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
  // const handleChange = (e) => {
  //   console.log(e.target.checked);
  //   if (e.target.checked) {
  //     setStatus("completed");
  //     console.log("completed");
  //   } else {
  //     setStatus("on-hold");
  //     console.log("on-hold");
  //   }
  // };

  return (
    <div>
      <h1>LIST</h1>
      <h2>{status}</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onClick={() => handleToggle(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteById(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
