import { useState } from "react";

function Filter({ setTodos, todos, todosCount }) {
  const [selected, setSelected] = useState("");

  const [filterTodos, setFilterTodos] = useState([]);

  const handleRemove = () => {
    console.log("TODOS: ", todos);
    setTodos([]);
  };

  const handleRemoveCompleted = () => {
    setTodos((todo) => {
      return todos.filter((todo) => todo.completed !== true);
    });
  };

  const handleCompleted = () => {
    setFilterTodos([todos]);
    console.log("FILTER TODOS : ", filterTodos);
    const filtered = todos.filter((todo) => todo.completed === true);
    setFilterTodos(filtered);
    console.log("filter ", filtered);
  };

  //users.find((item) => item.name === "Elif" && item.age < 20);

  return (
    <div>
      Filter
      <footer className="footer">
        <span className="todo-count">
          <strong>{todosCount} </strong>
          items left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/" onClick={handleCompleted}>
              Active
            </a>
          </li>
          <li>
            <a href="#/" onClick={handleCompleted}>
              Active
            </a>
          </li>
          <li>
            <a href="./Newest">heey</a>
          </li>
        </ul>

        <button className="clear-completed" onClick={handleCompleted}>
          Clear completed
        </button>
        {/* <button className="clear-completed" onClick={handleRemove}>
          Clear completed
        </button> */}
      </footer>
    </div>
  );
}

export default Filter;
