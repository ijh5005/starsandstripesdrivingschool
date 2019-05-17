import React, { useState } from "react";

import Navbar from "../Navbar";
import ContactSection from "./ContactSection";
import PrevBtn from "../PreviousBtn";
import ContactForm from "./ContactForm"

import "./index.css";
import contactInfo from "./contactInfo";

const ContactPage = () => {
  return (<>
    {contactInfo.map((element, i) => (
      <ContactSection
        key={i}
        title={element.title}
        text={element.text}
      />
    ))}
    {/*<ContactForm />*/}
    <PrevBtn />
  </>);
};

export default ContactPage;
