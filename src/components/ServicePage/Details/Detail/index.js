import React, { useState } from 'react';
import "./index.css";

const Detail = ({content, index}) => {
  const order = (index % 2 === 0);
  // <p>{content.tipsHeading}</p>
  const text = (<div className="detailSide">
    <ul>
      {content.tips.map(data => {
        return <li>{data}</li>
      })}
    </ul>
  </div>);
  const img = (<div class="detailSide img">
    <img className="detailImg" src={content.img}/>
  </div>)
  return (<div className="detailComponent">
    {text}
    {img}
  </div>)
}

export default Detail;
