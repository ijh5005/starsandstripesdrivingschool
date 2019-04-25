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
<<<<<<< HEAD
      <Navbar />
      <br />
      <br />
      <br />

=======
>>>>>>> 0ceb94fc24ad372c9aeae07164c7c8045d025e4d
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
