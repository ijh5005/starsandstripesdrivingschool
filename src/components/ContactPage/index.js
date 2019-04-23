import React, { useState } from "react";
import "./index.css";
import Navbar from "../Navbar";
import map from "../map.png";
import ContactSection from "./ContactSection";
import contactInfo from "./contactInfo";

let images = [map];

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />

      {contactInfo.map((element, i) => (
        <ContactSection
          title={element.title}
          text={element.text}
          img={images[i]}
        />
      ))}
    </>
  );
};

export default ContactPage;
