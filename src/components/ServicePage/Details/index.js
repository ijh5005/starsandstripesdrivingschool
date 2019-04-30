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
    text: "tips..."
  },
  {
    img: img7,
    text: "tips..."
  },
  {
    img: img8,
    text: "tips..."
  },
  {
    img: img9,
    text: "tips..."
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
