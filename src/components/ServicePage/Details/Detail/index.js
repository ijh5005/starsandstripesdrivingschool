import React, { useState } from 'react';
import "./index.css";

const Detail = ({content, index}) => {

  debugger
  const order = (index % 2 === 0);
  const text = (<div className="detailSide">{content.text}</div>);
  const img = (
    <div class="detailSide">
      <img className="detailImg" src={content.img}/>
    </div>
  )
  return (<div className="detailComponent">
    {text}
    {img}
  </div>)
}

export default Detail;
