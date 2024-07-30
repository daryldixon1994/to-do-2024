import React from "react";
import TaskItem from "./TaskItem";
import { Message } from "semantic-ui-react";
function TaskList({ tasks, setTasks }) {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <TaskItem setTasks={setTasks} tasks={tasks} key={i} {...task} />
        ))
      ) : (
        <Message icon="info" header="No tasks yet" content="Start now" />
      )}
    </div>
  );
}

export default TaskList;
