import React from "react";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import "./app.css";
import { useState } from "react";

const App = () => {
  const [navbarHeight, setNavbarHeight] = useState("2rem");

  return (
    <>
      <Navbar navbarHeight={navbarHeight} />
      <Dashboard navbarHeight={navbarHeight} />
    </>
  );
};

export default App;
