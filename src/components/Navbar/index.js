import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./starslogo.png";

let Navbar = () => {
  return (<nav className="white">
    <div className="topnav">
      <a className="active" href="#home"> <img className="logo" src={logo}/></a>
      <div className="linksright">
        <Link to="/">Home</Link>
        <Link to="/service">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/review">Reviews</Link>
      </div>
    </div>
  </nav>);
};

export default Navbar;
