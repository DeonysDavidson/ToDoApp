import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Details from "./pages/Details";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}
