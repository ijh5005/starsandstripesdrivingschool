import React, { useState } from 'react';
import Heading from './Heading';
import PriceCard from './PriceCard';
import Details from './Details';
import { Link } from "react-router-dom";
import NextBtn from '../NextBtn';
import PrevBtn from '../PreviousBtn';
import "./index.css";

const ServicePage = () => {
  return (<div id="servicesPage">
    <Heading />
    <PriceCard />
    <PrevBtn/>
    <div className="scheduleButton">
      <a href="https://www.dot2e.penndot.gov/exam_scheduling/eslogin.jsp#top?20190416185208189=20190416185208189" target="_blank">
        click to schedule your driving test
      </a>
    </div>
    <Details />
    <NextBtn/>
  </div>)
}

export default ServicePage;
