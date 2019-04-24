import React from "react";
import "./index.css";
import logo from "./starslogo.png";

let Navbar = () => {
  return (<nav className="white">
    <div className="topnav">
      <a className="active" href="#home"> <img className="logo" src={logo}/></a>
      <div className="linksright">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/review">Reviews</a>
        <a href="/service">Services</a>
      </div>
    </div>
  </nav>);
};

export default Navbar;
