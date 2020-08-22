import React, { useState } from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Jumbotron fluid id="head">
        <Container fluid>
          <h1 className="display-5">To-Do App</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
