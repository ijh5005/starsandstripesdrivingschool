import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const bottom = document.getElementsByClassName('hideBeforeFadeInSetup')[0];
    bottom.classList.remove("hideBeforeFadeIn");
  }, [])

  return (<>
    <div className="containerTestomny">

      <p className="smallText hideBeforeFadeIn hideBeforeFadeInSetup reviewTitle">Hear from our customers</p>

      <Testimonial img={avatar5} img2={avatar3}/>
      <Testimonial img={avatar} img2={avatar4}/>
      <PrevBtn/>
      <NextBtn/>

   </div>
  </>)
}

export default ReviewPage;
