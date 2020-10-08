import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = (props) => {
  const { navCollapsed, isOpen, setNavCollapsed } = props;

  const navLinks = [
    {
      type: "homeLink",
      icon: "icon fas fa-home",
      path: "/home",
      name: "Home",
    },
    {
      type: "coursesLink",
      icon: "icon fas fa-graduation-cap",
      path: "/courses",
      name: "Courses",
    },
  ];

  const navVarirant = {
    open: {
      display: "grid",
      height: "100%",
      transition: {
        duration: 0,
      },
    },
    in: {
      display: "grid",
      height: "100vh",
      transition: {
        when: "beforeChildren",
        duration: 0.5,
      },
    },
    out: {
      display: "grid",
      height: "0%",
      transition: {
        when: "afterChildren",
      },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.div
      initial={isOpen ? "open" : navCollapsed ? "in" : "out"}
      animate={isOpen ? "open" : navCollapsed ? "in" : "out"}
      variants={navVarirant}
      className="navbar"
    >
      <motion.div className="logo">
        <i class="icon fab fa-microblog"></i>
      </motion.div>
      {navLinks.map(({ type, name, icon, path }) => {
        return (
          <Navlink
            type={type}
            icon={icon}
            path={path}
            name={name}
            navCollapsed={navCollapsed}
            setNavCollapsed={setNavCollapsed}
          />
        );
      })}
    </motion.div>
  );
};

export default Navbar;

const Navlink = ({ type, icon, path, name, setNavCollapsed }) => {
  const navItemVariant = {
    open: {
      display: "grid",
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
    in: {
      display: "grid",
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div className={`navItem ${type}`} variants={navItemVariant}>
      <NavLink
        to={path}
        className="navLink"
        activeClassName="active"
        onClick={() => setNavCollapsed(false)}
      >
        <i class={icon}></i>
        <p>{name}</p>
      </NavLink>
    </motion.div>
  );
};
