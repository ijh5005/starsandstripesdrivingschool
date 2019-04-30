import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

let Footer = () => {
  return (<nav id="footer">
    <a href="https://www.facebook.com/Stars-Stripes-Driving-School-1003649293357761/">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.instagram.com/starsandstripesdrivingschool/">
      <i class="fab fa-facebook-square"></i>
    </a>
  </nav>);
};

export default Footer;
