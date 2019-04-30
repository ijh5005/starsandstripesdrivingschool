import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

let Footer = () => {
  return (<nav id="footer">
    <Link to="https://www.facebook.com/Stars-Stripes-Driving-School-1003649293357761/">
      <i class="fab fa-instagram"></i>
    </Link>
    <Link to="https://www.instagram.com/starsandstripesdrivingschool/">
      <i class="fab fa-facebook-square"></i>
    </Link>
  </nav>);
};

export default Footer;
