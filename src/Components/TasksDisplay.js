import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  ListGroup,
  ListGroupItem,
  Col,
  Input,
  Button,
  Label,
  Form,
  FormGroup
} from "reactstrap";
import { taskListArray } from "../states/taskList";
import { useHistory } from "react-router-dom";

const TasksDisplay = () => {
  const [taskList, setTaskList] = useRecoilState(taskListArray);
  const history = useHistory();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const setColor = (index) => {
    const list = [...taskList];
    if (!list[index].isCompleted) {
      switch (list[index].priority) {
        case "low":
          return "info";
        case "medium":
          return "warning";
        case "high":
          return "danger";
        default:
          return "info";
      }
    } else {
      return "success";
    }
  };

  const setComplete = (index) => {
    const list = [...taskList];
    list[index] = { ...list[index], isCompleted: !list[index].isCompleted };
    setTaskList(list);
  };

  const changePriority = (event, index) => {
    const list = [...taskList];
    list[index] = { ...list[index], priority: event.target.value };
    setTaskList(list);
  };

  const deleteTask = (index) => {
    const list = [...taskList];
    list.splice(index, 1);
    setTaskList(list);
  };

  const detailAdress = (index) => {
    history.push(`/detail/${index}`);
  };

  return (
    <div className="taskDisplay">
      <h3>Tasks:</h3>
      <Form>
        <FormGroup row>
          <Label for="filter" sm={3} id="fTitle">
            <h5>Filter :</h5>
          </Label>
          <Col sm={9}>
            <Input
              type="select"
              name="filter"
              id="filter"
              onChange={(event) => setFilter(event.target.value)}
            >
              <option value="all" selected>
                All
              </option>
              <option value="true">Completed</option>
              <option value="false">Pending</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Input>
          </Col>
        </FormGroup>
      </Form>
      <ListGroup row>
        <Col sm={12}>
          {taskList
            ? taskList.map((task, taskIndex) => {
                if (
                  filter === "all" ||
                  filter === task.priority ||
                  filter === task.isCompleted.toString()
                ) {
                  return (
                    <ListGroupItem
                      className="item"
                      key={taskIndex}
                      color={setColor(taskIndex)}
                    >
                      <Input
                        type="checkbox"
                        name="isCompleted"
                        id="isCompleted"
                        checked={task.isCompleted}
                        onClick={() => setComplete(taskIndex)}
                      />{" "}
                      <div id="title">{task.name}</div>
                      <Input
                        type="select"
                        name="priority"
                        id="priority"
                        onChange={(event) => changePriority(event, taskIndex)}
                      >
                        <option value="low" selected={task.priority === "low"}>
                          low
                        </option>
                        <option
                          value="medium"
                          selected={task.priority === "medium"}
                        >
                          medium
                        </option>
                        <option
                          value="high"
                          selected={task.priority === "high"}
                        >
                          high
                        </option>
                      </Input>
                      <Button
                        outline
                        color="danger"
                        onClick={() => deleteTask(taskIndex)}
                        id="butt"
                      >
                        DEL
                      </Button>
                      <Button
                        outline
                        color="success"
                        onClick={() => detailAdress(taskIndex)}
                      >
                        DETAIL
                      </Button>
                    </ListGroupItem>
                  );
                } else {
                  return <div key={taskIndex}></div>;
                }
              })
            : setTaskList([])}
        </Col>
      </ListGroup>
    </div>
  );
};

export default TasksDisplay;
