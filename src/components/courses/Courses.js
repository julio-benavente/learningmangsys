import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Main from "./Main";
import Course from "./course/Course";
import ProfileBar from "../shared/ProfileBar/ProfileBar";
import "./Courses.scss";
import Lesson from "./course/Lesson";

const Courses = (props) => {
  let { path } = useRouteMatch();
  const { navCollapsed, isOpen, setNavCollapsed } = props;

  return (
    <div id="courses">
      <Navbar
        navCollapsed={navCollapsed}
        isOpen={isOpen}
        setNavCollapsed={setNavCollapsed}
      />
      <ProfileBar
        navCollapsed={navCollapsed}
        isOpen={isOpen}
        setNavCollapsed={setNavCollapsed}
      />
      <Switch>
        <Route path={`${path}/:course/:lesson`} component={Lesson} />
        <Route path={`${path}/:course`} component={Course} />
        <Route exact path={path} component={Main} />
      </Switch>
    </div>
  );
};

export default Courses;
