import React, { useState } from 'react';
import "./index.css";

import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
import img4 from "./imgs/4.png";
import img5 from "./imgs/5.png";
import img6 from "./imgs/6.png";

const price0 = [
  {
    price: "$70",
    list: [
      "2 hr driving lesson"
    ],
    img: img1
  }
]

const price1 = [
  {
    price: "$50",
    list: [
      "Car Rental",
      "FREE 15 minutes parallel parking practice"
    ],
    img: img2
  },
  {
    price: "$80",
    list: [
      "Car Rental",
      "30 minutes practice",
      "FREE 15 minutes parallel parking practice"
    ],
    img: img3
  },
  {
    price: "$100",
    list: [
      "Car Rental",
      "1 hour practice",
      "FREE 15 minutes parallel parking practice"
    ],
    img: img4
  },
  {
    price: "$125",
    list: [
      "Car Rental",
      "2 hour practice"
    ],
    img: img5
  }
];

const price2 = [
  {
    price: "$80",
    list: [
      "Car Rental",
      "FREE 15 minutes parallel parking practice"
    ]
  },
  {
    price: "$100",
    list: [
      "Car Rental",
      "30 minutes practice",
      "FREE 15 minutes parallel parking practice"
    ]
  },
  {
    price: "$125",
    list: [
      "Car Rental",
      "1 hour practice",
      "FREE 15 minutes parallel parking practice"
    ]
  }
];

const PriceCard = () => {
  return (<>
    <div className="priceCardContainer">
      <p className="smallTextPriceCard">Driving Practice Cost</p>
      {price0.map((data, index) => {
        return (<div key={index} className="cardRow flexRow">
          <div className="priceCard">
            <div className="cardPrice">
              <p>{data.price}</p>
            </div>
            <ul>
              {data.list.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div className="imgBox">
            <img src={process.env.PUBLIC_URL + data.img} />
          </div>
        </div>)
      })}
      <p className="smallTextPriceCard">Driving Test: Philly Prices</p>
      {price1.map((data, index) => {
        return (<div key={index} className="cardRow flexRow">
          <div className="priceCard" key={index}>
            <div className="cardPrice">
              <p>{data.price}</p>
            </div>
            <ul>
              {data.list.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div className="imgBox">
            <img src={process.env.PUBLIC_URL + data.img} />
          </div>
        </div>)
      })}
      <p className="smallTextPriceCard">Driving Test: Norristown, Media, Huntingdon Valley, Bensalem Prices</p>
      {price2.map((data, index) => {
        return (<div className="priceCard" key={index}>
          <div className="cardPrice">
            <p>{data.price}</p>
          </div>
          <ul>
            {data.list.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>)
      })}
    </div>
  </>)
}

export default PriceCard;
