import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"}>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
