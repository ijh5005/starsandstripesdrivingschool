import React, { useState, useEffect } from 'react';
import "./index.css";

const RightSide = () => {

  useEffect(() => {
    // animate spans
    const letters = document.getElementsByTagName("span");
    const length = letters.length;
    for(let i = 0; i < length; i++){
      letters[i].classList.remove("down");
    }
  }, [])

  return (
    <div id="rightSide">
      <div id="container">
        <p className="letter">
          <span className="one down">d</span>
          <span className="two up down">r</span>
          <span className="three up down">i </span>
          <span className="four down">v</span>
          <span className="five up down">e </span>
          <span className="six up down">n</span>
          <span className="five down">o</span>
          <span className="five up down">w</span>
        </p>
      </div>
    </div>
  )
}

export default RightSide;
