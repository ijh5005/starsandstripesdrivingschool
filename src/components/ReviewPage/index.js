import React, { useState } from 'react';
import "./index.css";
import NextBtn from '../NextBtn'
import PrevBtn from '../PreviousBtn'
import Testimonial from './Testimonial'
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import avatar4 from './avatar4.png'
import avatar from './avatar.png'
import avatar3 from './avatar3.png'
import avatar5 from './avatar5.png'



const ReviewPage = () => {
  return (
    <>
    <div className="container">
     <div className="intro">Hear from our customers</div>
     <br/>
     <br/>
    <Testimonial img={avatar5} img2={avatar3}/>
    <Testimonial img={avatar} img2={avatar4}/>
    <PrevBtn/>
    <NextBtn/>
   </div>

    </>
  )
}

export default ReviewPage;
