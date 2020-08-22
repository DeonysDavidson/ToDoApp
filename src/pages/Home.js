import React from "react";
import Header from "../Components/Header";
import TaskInput from "../Components/TaskInput";
import TaskDisplay from "../Components/TasksDisplay";
import StatsDisplay from "../Components/StatsDisplay";
import { Row, Col } from "reactstrap";

const Home = () => {
  return (
    <>
      <Header />
      <TaskInput />
      <Row>
        <Col xs="7">
          <TaskDisplay />
        </Col>
        <Col xs="5">
          <StatsDisplay />
        </Col>
      </Row>
    </>
  );
};

export default Home;
