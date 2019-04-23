import React from "react";
import "./index.css";
import logo from "./starslogo.png";

let Navbar = () => {
  return (
    <nav className="white">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo black-text">
          <img className="logo" src={logo} />
          <p className="logoText"> Stars & Stripes Driving School</p>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a className="black-text links" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="black-text links" href="/contact">
              Contact
            </a>
          </li>
          <li>
            <a className="black-text font links" href="">
              Review
            </a>
          </li>
          <li>
            <a className="black-text links" href="/service">
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
