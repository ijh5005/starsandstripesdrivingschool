import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

const Bottom = () => {
  useEffect(() => {
    const bottom = document.getElementsByClassName('hideBeforeFadeInSetup')[0];
    bottom.classList.remove("hideBeforeFadeIn");
  }, [])

  return (
    <div id="bottom" className="hideBeforeFadeIn hideBeforeFadeInSetup">
      <p id="title">Stars & Stripes Driving School</p>
      <p className="minitext">The best school in Philadelphia <span id="flag">&#9873;</span> <br/>Door to Door Lessons</p>
      <a class="phone" href="tel:267-262-1196">
        <p className="minitext phoneLink">(267) 262 - 1196</p>
      </a>
      <Link to={'/page/service'}>
        <div id="startBtn">
            <p>Services</p>
        </div>
      </Link>
    </div>
  )
}

export default Bottom;
