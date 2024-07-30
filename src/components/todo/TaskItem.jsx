import React from "react";
import { Message, Icon } from "semantic-ui-react";

function TaskItem({ id, task, isDone, desc, tasks, setTasks }) {
  function handleDone() {
    setTasks(
      tasks.map((elt) => {
        return elt.id === id ? { ...elt, isDone: true } : elt;
      })
    );
  }
  function handleNotDone() {
    setTasks(
      tasks.map((elt) => {
        return elt.id === id ? { ...elt, isDone: false } : elt;
      })
    );
  }
  function handleRemove() {
    setTasks(tasks.filter((elt) => elt.id !== id));
  }
  return (
    <div>
      <Message
        color={isDone ? "green" : "red"}
        icon={
          <>
            {isDone ? (
              <Icon
                style={{ cursor: "pointer" }}
                size="tiny"
                name="minus circle"
                onClick={handleNotDone}
              />
            ) : (
              <Icon
                style={{ cursor: "pointer" }}
                onClick={handleDone}
                size="tiny"
                name="check"
              />
            )}
            <Icon onClick={handleRemove} name="close" />
          </>
        }
        header={task}
        content={desc}
      />
    </div>
  );
}

export default TaskItem;
