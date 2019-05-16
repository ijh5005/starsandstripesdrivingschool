import React, { useState } from 'react';
import Top from "./Top";
import Bottom from "./Bottom";
import "./index.css";

const LeftSide = () => {
  return (
    <div id="leftSide">
      <Top />
      <Bottom />
    </div>
  )
}

export default LeftSide;
