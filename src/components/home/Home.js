import React from "react";
import "./Home.scss";
import Main from "./Main";
import Navbar from "../shared/Navbar/Navbar";
import ProfileBar from "../shared/ProfileBar/ProfileBar";

const Home = (props) => {
  const { navCollapsed, isOpen, setNavCollapsed } = props;

  return (
    <div className="home">
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
      <Main />
    </div>
  );
};

export default Home;
