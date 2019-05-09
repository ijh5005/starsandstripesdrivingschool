import React, { useState } from "react";
import "./index.css";
import Navbar from "../Navbar";
import ContactSection from "./ContactSection";
import contactInfo from "./contactInfo";
import PrevBtn from "../PreviousBtn";

const ContactPage = () => {
  return (
    <>
      {contactInfo.map((element, i) => (
        <ContactSection
          key={i}
          title={element.title}
          text={element.text}
        />
      ))}
      <PrevBtn />
    </>
  );
};

export default ContactPage;
