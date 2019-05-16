import React, { useState } from 'react';
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import "./index.css";

import img from "./img/car.jpg"

const HomePage = () => {
  return (<div id="homePage">
    <LeftSide />
    <RightSide />
    <img className="homeImg" src={img} />
  </div>)
}

export default HomePage;
