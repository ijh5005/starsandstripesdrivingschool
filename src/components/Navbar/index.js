import React from "react";
import "./index.css";
import logo from "./starslogo.png";

let Navbar = () => {
  return (
    <nav className="white">
<<<<<<< HEAD
  <div className="topnav">
  <a className="active" href="#home"> <img className="logo" src={logo}/></a>
  <div className="linksright">
=======
  <div class="topnav">
  <a class="active" href="/"> <img className="logo" src={logo}/></a>
  <div class="linksright">
>>>>>>> 2cb4f8f614290e4a22699d0cc02beec51ed255c1
    <a href="/">Home</a>
    <a href="/contact">Contact</a>
    <a href="/review">Reviews</a>
    <a href="/service">Services</a>
  </div>
</div>
</nav>
  );
};

export default Navbar;
