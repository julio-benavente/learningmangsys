import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/home/Home";
import Courses from "./components/courses/Courses";

const App = () => {
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const closeResponsiveNav = () => {
      if (window.innerWidth > 767) {
        setIsOpen(true);
        setNavCollapsed(false);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", closeResponsiveNav);

    closeResponsiveNav();

    return () => window.removeEventListener("resize", closeResponsiveNav);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/courses"
            render={() => (
              <Courses
                navCollapsed={navCollapsed}
                isOpen={isOpen}
                setNavCollapsed={setNavCollapsed}
              />
            )}
          />
          <Route
            path="/home"
            render={() => (
              <Home
                navCollapsed={navCollapsed}
                isOpen={isOpen}
                setNavCollapsed={setNavCollapsed}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => {
              const { history } = props;
              history.push("/home");
              return null;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
