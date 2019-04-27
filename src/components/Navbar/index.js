import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./starslogo.png";

let Navbar = () => {

  useEffect(() => {
    highLightNav();
  }, [])

  const highLightNav = () => {
    const location = window.location.pathname;
    const active = document.getElementsByClassName("active");
    if(active.length){
      active[0].classList.remove("active");
    }
    if(location === "/page/service"){
      const ele = document.getElementById("Services");
      ele.classList.add("active")
    } else if (location === "/page/contact") {
      const ele = document.getElementById("Contact");
      ele.classList.add("active")
    } else if (location === "/page/review") {
      const ele = document.getElementById("Review");
      ele.classList.add("active")
    }
  }

  if(!window.onclick){
    window.onclick = highLightNav;
  }

  return (<nav className="white">
    <div className="topnav">
      <Link to="/">
        <img src={logo}/>
      </Link>
      <div className="linksright">
        <Link className="navToHighlight" to="/">Home</Link>
        <Link className="navToHighlight" id="Services" to="/page/service">Services</Link>
        <Link className="navToHighlight" id="Contact" to="/page/contact">Contact</Link>
        <Link className="navToHighlight" id="Review" to="/page/review">Review</Link>
      </div>
    </div>
  </nav>);
};

export default Navbar;
