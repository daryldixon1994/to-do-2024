import { useState } from "react";
import "./App.css";
import TaskList from "./components/todo/TaskList";
import TaskForm from "./components/todo/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <div className="todo">
        <h1>MY TASKS</h1>
        <TaskForm setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
