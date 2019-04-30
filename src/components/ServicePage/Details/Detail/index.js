import React, { useState } from 'react';
import "./index.css";

const Detail = ({content, index}) => {
  const order = (index % 2 === 0);
  const text = (<div className="detailSide">
    <p>{content.text}</p>
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
