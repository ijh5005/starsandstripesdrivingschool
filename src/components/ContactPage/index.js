import React, { useState } from 'react';
import "./index.css";
import Navbar from '../Navbar';
import img1 from '../driving1.jpg'
import img2 from '../driving2.jpg'
import img3 from '../driving3.jpg'
import img4 from '../driving4.jpg'
import img5 from '../driving5.jpg'
import img6 from '../driving6.jpg'
import img7 from '../driving7.jpg'
import ContactSection from './ContactSection'
import contactInfo from './contactInfo';

let images = [img2,img3,img6]

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    
  
    {contactInfo.map((element,i)=><ContactSection title={element.title} text={element.text} img={images[i]}/>)}
    
    

    </>
  )
}

export default ContactPage;
