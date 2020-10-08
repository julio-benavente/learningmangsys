import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import "./Course.scss";
import Lessons from "./Lessons";
import Overview from "./Overview";
import Lesson from "./Lesson";
import { courses } from "../../../data/data";

const Course = () => {
  const { path } = useRouteMatch();
  const [course, setCourse] = useState({});
  const { course: courseCode } = useParams();

  useEffect(() => {
    setCourse(courses.find((e) => e.code == courseCode));
  }, []);

  return (
    <div id="courseSection">
      <Switch>
        <Route path={`${path}/:lesson`} component={Lesson} />
        <Route
          exact
          path={path}
          render={(props) => {
            return (
              <div>
                <Overview data={course} />
                <Lessons data={course} />
              </div>
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default Course;
