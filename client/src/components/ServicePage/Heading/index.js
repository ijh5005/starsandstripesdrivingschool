import React, { useState, useEffect } from 'react';
import "./index.css";

const Heading = () => {
  useEffect(() => {
    const bottom = document.getElementsByClassName('hideBeforeFadeInSetup')[0];
    bottom.classList.remove("hideBeforeFadeIn");
  }, [])

  return (<>
    <div className="headingContainer">
      <p className="smallText hideBeforeFadeIn hideBeforeFadeInSetup">Better Deals Than The Rest</p>
      <p className="largeText">$$$$</p>
    </div>
  </>)
}

export default Heading;
