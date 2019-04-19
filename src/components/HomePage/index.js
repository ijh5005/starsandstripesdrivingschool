import React, { useState } from 'react';
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import "./index.css";

const HomePage = () => {
  return (<div id="homePage">
    <LeftSide />
    <RightSide />
  </div>)
}

export default HomePage;
