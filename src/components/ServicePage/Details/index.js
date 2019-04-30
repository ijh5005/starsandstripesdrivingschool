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
    text: "something"
  },
  {
    img: img2,
    text: "something"
  },
  {
    img: img3,
    text: "something"
  },
  {
    img: img4,
    text: "something"
  },
  {
    img: img5,
    text: "something"
  },
  {
    img: img6,
    text: "something"
  },
  {
    img: img7,
    text: "something"
  },
  {
    img: img8,
    text: "something"
  },
  {
    img: img9,
    text: "something"
  }
]

const Details = () => {
  return (<div id="detailsPage">
    {content.map((data, index) => {
      return <Detail content={data} index={index} />
    })}
  </div>)
}

export default Details;
