import React, { useState } from "react";
import { FormGroup, FormField, Form, Input, Button } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
function TaskForm({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState({
    task: "",
    isDone: false,
    desc: "",
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value, id: uuidv4() });
  };
  const handleAdd = () => {
    if (newTask.task && newTask.desc) {
      setTasks([...tasks, newTask]);
      setNewTask({
        task: "",
        isDone: false,
        desc: "",
      });
      return;
    } else {
      return alert("Empty fields are not allowed");
    }
  };
  return (
    <div className="task-form">
      <Form onChange={(e) => handleChange(e)}>
        <FormGroup widths="equal">
          <FormField
            id="form-input-control-first-name"
            control={Input}
            type="text"
            placeholder="Type your task here"
            name="task"
            value={newTask.task}
          />
          <FormField
            id="form-input-control-first-name"
            control={Input}
            type="text"
            placeholder="Description"
            name="desc"
            value={newTask.desc}
          />
          <Button onClick={handleAdd}>Add</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default TaskForm;
