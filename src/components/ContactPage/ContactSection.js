import React, { useEffect } from "react";
import NextBtn from "../NextBtn";
import img from "./map.png";
import ContactForm from './ContactForm'
const ContactSection = ({ title, text }) => {

  useEffect(() => {
    const bottom = document.getElementsByClassName('hideBeforeFadeInSetup')[0];
    bottom.classList.remove("hideBeforeFadeIn");
  }, [])

  return (
    <>
      <div className="container hideBeforeFadeIn hideBeforeFadeInSetup contactHolder">
        <div className="left">
          <p className="header">{title}</p>
          <p className="description">{text}</p>
          <a className="details" href="tel:267-262-1196">Phone: 267-262-1196</a>
          <p className="schedule">Operating Hours</p>
          <p className="details">Open 7 days a week</p>
          <p className="details">8AM to 7PM</p>
        </div>

        <div
          style={{
            background: `url(${img})`,
            backgroundPosition: "52% 100%",
            backgroundRepeat: "no-repeat"
          }}
          className="right fadeInUp contactImg"
          id="right"
        />
      </div>
      <div style={{position:'absolute',left:'70px',top:'110%'}}>
      <ContactForm/>
      </div>
      <NextBtn />
    </>
  );
};

export default ContactSection;
