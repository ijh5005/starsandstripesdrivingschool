import React, { useState } from 'react';
import Navbar from '../Navbar';
import Heading from './Heading';
import PriceCard from './PriceCard';
import "./index.css";

const ServicePage = () => {
  return (<>
    <Navbar/>
    <Heading />
    <PriceCard />
  </>)
}

export default ServicePage;
