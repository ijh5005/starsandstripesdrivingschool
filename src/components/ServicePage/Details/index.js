import React, { useState } from 'react';
import Detail from "./Detail";
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";
import img4 from "../imgs/img4.jpg";
import img5 from "../imgs/img5.jpg";
import img6 from "../imgs/img6.jpg";
import img7 from "../imgs/img7.jpg";
import img8 from "../imgs/img8.jpg";
import img9 from "../imgs/img9.jpg";
import "./index.css";

const content = [
  {
    img: img1,
    text: "tips...",
    tipsHeading: "Driving During Snow",
    tips: [
      "It is necessary to drive slowly when taking angles in snowy situations and must drive quickly below the actual, maximum speed to get a safe drive.",
      "Do not exceed other cars at high speed.",
      "Slippery roads leading to vehicle collisions should be monitored.",
      "Attention should be paid to some warning signs placed in deep drift areas to ensure safety.",
      "Take time to stop.",
      "The use of car lights in driving makes driving safe."
    ]
  },
  {
    img: img7,
    text: "tips...",
    tipsHeading: "Driving during the rain",
    tips: [
      "It is essential that students, check the tires before driving.",
      "Ensuring that wipers works and how effective they are.",
      "Make sure the car glass is clean from the outside and inside.",
      "Make sure that the condensate resistors are applied to the car’s glass to prevent fog from forming on the glass",
      "Driving is quicker than those we do in normal days.",
      "Leaving safer distances between car’s",
      "Avoid water pools on the edges of the road if possible.",
      "Communicate well with other drivers around you and share the road with them in a safe way for everyone."
    ]
  },
  {
    img: img8,
    text: "tips...",
    tipsHeading: "Driving during the night",
    tips: [
      "It is necessary to drive slowly when taking angles in snowy situations and must drive quickly below the actual, maximum speed to get a safe drive.",
      "Do not exceed other cars at high speed.",
      "Slippery roads leading to vehicle collisions should be monitored.",
      "Attention should be paid to some warning signs placed in deep drift areas to ensure safety.",
      "Take time to stop.",
      "The use of car lights in driving makes driving safe."
    ]
  },
  {
    img: img9,
    text: "tips...",
    tipsHeading: "Driving During Snow",
    tips: [
      "It is necessary to drive slowly when taking angles in snowy situations and must drive quickly below the actual, maximum speed to get a safe drive.",
      "Do not exceed other cars at high speed.",
      "Slippery roads leading to vehicle collisions should be monitored.",
      "Attention should be paid to some warning signs placed in deep drift areas to ensure safety.",
      "Take time to stop.",
      "The use of car lights in driving makes driving safe."
    ]
  }
]

const Details = () => {
  return (<div id="detailsPage">
    <p className="smallTextPriceCard">Tips</p>
    {content.map((data, index) => {
      return <Detail content={data} index={index} />
    })}
  </div>)
}

export default Details;
