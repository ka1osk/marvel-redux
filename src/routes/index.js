import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Form from "pages/Form";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/character/:id" component={Detail} />
      <Route exact path="/character/:id/edit" component={Form} />
    </Switch>
  );
};
