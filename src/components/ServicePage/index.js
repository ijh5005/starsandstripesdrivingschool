import React, { useState } from 'react';
import Heading from './Heading';
import PriceCard from './PriceCard';
import "./index.css";
import NextBtn from '../NextBtn';
import PrevBtn from '../PreviousBtn';


const ServicePage = () => {
  return (<div id="servicesPage">
    <Heading />
    <PriceCard />
    <PrevBtn/>
    <NextBtn/>
  </div>)
}

export default ServicePage;
