import React, { useState } from 'react';
import "./index.css";

const price0 = [
  {
    price: "$70",
    list: [
      "2 hr driving lesson"
    ]
  }
]

const price1 = [
  {
    price: "$50",
    list: [
      "Car Rental",
      "FREE 15 minutes parallel parking practice"
    ]
  },
  {
    price: "$80",
    list: [
      "Car Rental",
      "30 minutes practice",
      "FREE 15 minutes parallel parking practice"
    ]
  },
  {
    price: "$100",
    list: [
      "Car Rental",
      "1 hour practice",
      "FREE 15 minutes parallel parking practice"
    ]
  },
  {
    price: "$125",
    list: [
      "Car Rental",
      "2 hour practice"
    ]
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

// 50$ rent car + 15 minutes practice  parallel parking free
// 80$  ( 30 minutes  practice + rent car + 15 minutes practice parallel parking free )
// 100$  ( 1 hour practice + rent car+ 15 minutes practice parallel  parking free )
// 125$ ( 2hour practice + rent car )
//
// Prices for test in ( Norristown + media+ Huntingdon Vly + Bensalem )
// 80$( rent car + 15 minutes practice parallel parking free )
// 100$ ( 30 minutes practice + rent car + 15 minutes practice parallel parking free )
// 125$ (1 hour practice + rent car + 15 minutes practice parallel parking free )

const PriceCard = () => {
  return (<>
    <div className="priceCardContainer">
      <p className="smallTextPriceCard">Driving Practice Cost</p>
      {price0.map((data, index) => {
        return (<div className="priceCard" key={index}>
          <div className="cardPrice">
            <p>{data.price}</p>
          </div>
          <ul>
            {data.list.map(d => <li>{d}</li>)}
          </ul>
        </div>)
      })}
      <p className="smallTextPriceCard">Driving Test: Philly Prices</p>
      {price1.map((data, index) => {
        return (<div className="priceCard" key={index}>
          <div className="cardPrice">
            <p>{data.price}</p>
          </div>
          <ul>
            {data.list.map(d => <li>{d}</li>)}
          </ul>
        </div>)
      })}
      <p className="smallTextPriceCard">Driving Test: Norristown, Media, Huntingdon Valley, Bensalem Prices</p>
      {price2.map((data, index) => {
        return (<div className="priceCard" key={index}>
          <div className="cardPrice">
            <p>{data.price}</p>
          </div>
          <ul>
            {data.list.map(d => <li>{d}</li>)}
          </ul>
        </div>)
      })}
    </div>
  </>)
}

export default PriceCard;
