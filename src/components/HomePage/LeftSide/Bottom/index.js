import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./index.css";

const Bottom = () => {
  return (
    <div id="bottom">
      <p id="title">Stars & Stripes Driving School</p>
      <p className="minitext">The best school in Philadelphia <span id="flag">&#9873;</span> <br/>Door to Door Lessons</p>
      <div id="startBtn">
        <Link to="/service">
          <p>Start</p>
        </Link>
      </div>
    </div>
  )
}

export default Bottom;
