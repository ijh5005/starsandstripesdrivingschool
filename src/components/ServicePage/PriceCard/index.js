import React, { useState } from 'react';
import "./index.css";

const price = [
  {
    price: "$70",
    list: [
      "Car Rental",
      "Basic in-car control overview",
      "Test route navigation"
    ],
    isBestDeal: true
  },
  {
    price: "$70",
    list: [
      "Car Rental",
      "Basic in-car control overview",
      "Test route navigation"
    ]
  },
  {
    price: "$70",
    list: [
      "Car Rental",
      "Basic in-car control overview",
      "Test route navigation"
    ]
  }
];

const PriceCard = () => {
  return (<>
    <div className="priceCardContainer">
      {price.map((data, index) => {
        return (<div className="priceCard" key={index}>
          {data.isBestDeal && <i className="fas fa-star"></i>}
          <div className="cardPrice">
            <p>$70<span className="small">/hr</span></p>
          </div>
          <p className="listHeading">Includes</p>
          <ul>
            <li>Car Rental</li>
            <li>Basic in-car control overview</li>
            <li>Test route navigation</li>
          </ul>
        </div>)
      })}
    </div>
  </>)
}

export default PriceCard;
