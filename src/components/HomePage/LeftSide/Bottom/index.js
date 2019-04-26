import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

const Bottom = () => {
  return (
    <div id="bottom">
      <p id="title">Stars & Stripes Driving School</p>
      <p className="minitext">The best school in Philadelphia <span id="flag">&#9873;</span> <br/>Door to Door Lessons</p>
      <Link to={{pathname:'/page/service',state:{prevLocation:window.location.pathname}}}>
        <div id="startBtn">
            <p>Start</p>
        </div>
      </Link>
    </div>
  )
}

export default Bottom;
