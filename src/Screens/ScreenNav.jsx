import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
const ScreenNav = (props) => {
  const routes = (
    
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects" component={Projects} />
      <Route path="/education" component={Education} />
      <Route path="/contact" component={Contact}/>
      <Redirect to="/about" />
    </Switch>
  );
  return <div>{routes}</div>;
};

export default ScreenNav;
