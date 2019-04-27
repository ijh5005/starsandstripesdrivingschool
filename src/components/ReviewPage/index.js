import React, { useState } from 'react';
import "./index.css";
import NextBtn from '../NextBtn'
import PrevBtn from '../PreviousBtn'
import Testimonial from './Testimonial'


const ReviewPage = () => {
  return (
    <>
    <div className="container">
     <div className="intro">Hear from our customers</div>
    <Testimonial/>
    <PrevBtn/>
    <NextBtn/>
   </div>

    </>
  )
}

export default ReviewPage;
