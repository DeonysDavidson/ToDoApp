import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { newTaskInput } from "../states/taskInput";
import { newPriorityInput } from "../states/priorityInput";
import { taskListArray } from "../states/taskList";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const TaskInput = () => {
  const [newTask, setNewTask] = useRecoilState(newTaskInput);
  const [newPriority, setNewPriority] = useRecoilState(newPriorityInput);
  const [taskList, setTaskList] = useRecoilState(taskListArray);
  const resetTask = useResetRecoilState(newTaskInput);

  const addTask = () => {
    const tasks = [...taskList];
    if (newTask && newPriority) {
      tasks.push({
        name: newTask,
        priority: newPriority,
        isCompleted: false,
        description: ""
      });
      setTaskList(tasks);
      resetTask();
    }
  };

  return (
    <div>
      <Form inline className="input">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="taskInput" className="mr-sm-2">
            New Task:
          </Label>
          <Input
            type="text"
            name="taskInput"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            id="taskInput"
            placeholder="Enter the Task"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 pri">
          <Label for="priorityInput" className="mr-sm-2">
            Priority:
          </Label>
          <Input
            type="select"
            name="priorityInput"
            id="priorityInput"
            onChange={(event) => setNewPriority(event.target.value)}
          >
            <option selected disabled>
              Select Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Input>
        </FormGroup>
        <Button color="secondary" onClick={addTask}>
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TaskInput;
