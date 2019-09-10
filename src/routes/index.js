import React from "react";

import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import Login from "../pages/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
