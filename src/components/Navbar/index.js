import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./starslogo.png";

let Navbar = () => {
  const [currentLocation, setCurrentLocation] = useState("Services");

  const hasActiveClass = (location) => {
    return false
  }

  const changeLocation = (location) => {
    setCurrentLocation(currentLocation)
  }

  const resetNav = (page) => {
    setCurrentLocation(page)
  }

  return (<nav className="white">
    <div className="topnav">
      <Link to="/home">
        <img src={logo}/>
      </Link>
      <div className="linksright">
        <Link
          className={currentLocation === "Home" ? "active" : null}
          to="/"
        ><span onClick={resetNav.bind(this, "Home")}>Home</span></Link>
        <Link
          className={currentLocation === "Services" ? "active" : null}
          to="/page/service"
        ><span onClick={resetNav.bind(this, "Services")}>Services</span></Link>
        <Link
          className={currentLocation === "Contact" ? "active" : null}
          to="/page/contact"
        ><span onClick={resetNav.bind(this, "Contact")}>Contact</span></Link>
        <Link
          className={currentLocation === "Review" ? "active" : null}
          to="/page/review"
        ><span onClick={resetNav.bind(this, "Review")}>Review</span></Link>
      </div>
    </div>
  </nav>);
};

export default Navbar;
