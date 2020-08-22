import React, { useState } from "react";
import { taskListArray } from "../states/taskList";
import { useRecoilState } from "recoil";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { useHistory, useParams } from "react-router-dom";

const TaskDetail = () => {
  const [tasks, setTasks] = useRecoilState(taskListArray);
  const history = useHistory();
  const { id } = useParams();
  const [content, setContent] = useState(tasks[id].description);
  const [title, setTitle] = useState(tasks[id].name);
  const [prior, setPrior] = useState(tasks[id].priority);
  const [status, setStatus] = useState(tasks[id].isCompleted);

  const update = (event) => {
    const list = [...tasks];
    list[id] = {
      ...list[id],
      name: title,
      priority: prior,
      isCompleted: status,
      description: content
    };
    setTasks(list);
    history.push("/");
    alert("Update Success");
  };

  const backTrack = () => {
    history.push("/");
  };

  return (
    <div className="details">
      <h3 id="detail">Task Details:</h3>
      <Form>
        <FormGroup row>
          <Label for="taskTitle" sm={2}>
            Title :
          </Label>
          <Col sm={5}>
            <Input
              type="text"
              name="taskTitle"
              id="taskTitle"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="selectPriority" sm={2}>
            Priority:
          </Label>
          <Col sm={2}>
            <Input
              type="select"
              name="selectPriority"
              id="selectPriority"
              onChange={(event) => setPrior(event.target.value)}
            >
              <option value="low" selected={prior === "low"}>
                low
              </option>
              <option value="medium" selected={prior === "medium"}>
                medium
              </option>
              <option value="high" selected={prior === "high"}>
                high
              </option>
            </Input>
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Col sm={6}>
            <FormGroup check inline>
              <Label check>
                <Input
                  type="radio"
                  name="completed"
                  checked={status}
                  onChange={() => setStatus(true)}
                />{" "}
                Completed
              </Label>
            </FormGroup>
            &nbsp;
            <FormGroup check inline>
              <Label check>
                <Input
                  type="radio"
                  name="completed"
                  checked={!status}
                  onChange={() => setStatus(false)}
                />{" "}
                Not Yet
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Description :
          </Label>
          <Col sm={5}>
            <Input
              type="textarea"
              name="description"
              id="description"
              rows="10"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </Col>
        </FormGroup>
      </Form>
      <Button color="info" onClick={update}>
        Save Changes
      </Button>
      &nbsp;
      <Button onClick={backTrack}>Back</Button>
    </div>
  );
};

export default TaskDetail;
