import React, { useState } from "react";
import "./ProfileBar.scss";

const ProfileBar = (props) => {
  const { navCollapsed, setNavCollapsed } = props;

  return (
    <div className="profileBar">
      {!navCollapsed ? (
        <i
          class="hamburguer fas fa-bars"
          onClick={() => {
            setNavCollapsed(!navCollapsed);
            console.log(navCollapsed);
          }}
        ></i>
      ) : (
        <i
          class="hamburguer fas fa-times"
          onClick={() => {
            setNavCollapsed(!navCollapsed);
            console.log(navCollapsed);
          }}
        ></i>
      )}
      <div className="profilePicture">
        <i class="icon fas fa-user"></i>
      </div>
    </div>
  );
};

export default ProfileBar;
