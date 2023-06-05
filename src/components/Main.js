import React from "react";
import { Route, Switch } from "react-router-dom";
import Bio from "./Bio";
import Projects from "./Projects";
import Blog from "./Blog";

export default function Main() {
  return (
    <Switch>
      <Route key={0} exact path="/" component={Bio} />
      <Route key={1} exact path="/bio" component={Bio} />
      <Route key={2} exact path="/projects" component={Projects} />
      <Route key={3} exact path="/blog" component={Blog} />
    </Switch>
  );
}
