import { useState } from "react";

function App() {
  // input field state
  const [task, setTask] = useState("");

  // todo list state
  const [todos, setTodos] = useState([]);

  // add task function
  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTodos = [...todos, task];

    // sort in ascending order
    updatedTodos.sort((a, b) => a.localeCompare(b));

    setTodos(updatedTodos);
    setTask(""); // clear input
  };

  // delete task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List (Vite + React)</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask} style={{ marginLeft: "5px" }}>
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
