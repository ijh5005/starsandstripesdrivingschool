import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

let SocialMediaBar = () => {
  return (<div id="socialMediaBar">
    <div id="socialMediaIcons">
      <a href="https://www.facebook.com/Stars-Stripes-Driving-School-1003649293357761/" target="_blank">
        <i id="facebookIcon" className="fab fa-facebook-square"></i>
      </a>
      <a href="https://www.instagram.com/starsandstripesdrivingschool/" target="_blank">
        <i id="instagramIcon" className="fab fa-instagram"></i>
      </a>
    </div>
  </div>);
};

export default SocialMediaBar;
