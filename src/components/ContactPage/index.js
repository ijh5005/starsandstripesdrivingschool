import React, { useState } from "react";
import "./index.css";
import Navbar from "../Navbar";
import map from "../map.png";
import ContactSection from "./ContactSection";
import contactInfo from "./contactInfo";
import PrevBtn from "../PreviousBtn";
let images = [map];

const ContactPage = () => {
  return (
    <>
      {contactInfo.map((element, i) => (
        <ContactSection
          key={i}
          title={element.title}
          text={element.text}
          img={images[i]}
        />
      ))}
      <PrevBtn />
    </>
  );
};

export default ContactPage;
