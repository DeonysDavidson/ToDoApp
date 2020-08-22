import React from "react";
import { useRecoilValue } from "recoil";
import { taskListArray } from "../states/taskList";
import { ListGroup, ListGroupItem, Badge, Col } from "reactstrap";

const StatsDisplay = () => {
  const tasks = useRecoilValue(taskListArray);

  const completedCalculator = () => {
    const count = tasks.filter((task) => {
      return task.isCompleted;
    });
    return count.length;
  };

  const pendingCalculator = () => {
    const count = tasks.filter((task) => {
      return !task.isCompleted;
    });
    return count.length;
  };

  const highCalculator = () => {
    const count = tasks.filter((task) => {
      return task.priority === "high";
    });
    return count.length;
  };

  const mediumCalculator = () => {
    const count = tasks.filter((task) => {
      return task.priority === "medium";
    });
    return count.length;
  };

  const lowCalculator = () => {
    const count = tasks.filter((task) => {
      return task.priority === "low";
    });
    return count.length;
  };

  return (
    <div className="stats">
      <h3> Stats: </h3>
      <ListGroup row>
        <Col sm={10}>
          <ListGroupItem className="justify-content-between">
            Total Number of Tasks : <Badge pill>{tasks.length}</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Number of Tasks Completed:{" "}
            <Badge pill>{completedCalculator()}</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Number of Tasks Pending : <Badge pill>{pendingCalculator()}</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Tasks with High priority:<Badge pill>{highCalculator()}</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Tasks with Medium priority: <Badge pill>{mediumCalculator()}</Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Tasks with Low priority: <Badge pill>{lowCalculator()}</Badge>
          </ListGroupItem>
        </Col>
      </ListGroup>
      {/* <label>Total Number of Tasks :</label>
      {tasks.length}
      <br /> */}
      {/* <label>Number of Tasks Completed:</label>
      {completedCalculator()}
      <br /> */}
      {/* <label>Number of Tasks Pending :</label>
      {pendingCalculator()}
      <br /> */}
      {/* <label>Tasks with High priority:</label>
      {highCalculator()}
      <br /> */}
      {/* <label>Tasks with Medium priority:</label>
      {mediumCalculator()}
      <br />
      <label>Tasks with Low priority:</label>
      {lowCalculator()} */}
    </div>
  );
};

export default StatsDisplay;
