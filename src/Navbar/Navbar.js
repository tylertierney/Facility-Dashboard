import "./navbar.css";
import React from "react";
import logo from "./image1.png";

const Navbar = ({ navbarHeight }) => {
  return (
    <nav className="navBar" style={{ height: navbarHeight }}>
      <img alt="logo" className="logo" src={logo}></img>
    </nav>
  );
};

export default Navbar;
