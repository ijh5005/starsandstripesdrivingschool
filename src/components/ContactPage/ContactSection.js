import React, { useEffect } from "react";
import NextBtn from "../NextBtn";

const ContactSection = ({ title, text, img }) => {

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
          <ul>
            <li className="details">Stars and Stripes Driving school is open 7 days a week</li>
            <li className="details">8AM to 7PM</li>
          </ul>
        </div>

        <div
          style={{
            background: `url(${img})`,
            height: "100%",
            backgroundPosition: "52% 100%",
            backgroundRepeat: "no-repeat"
          }}
          className="right fadeInUp contactImg"
          id="right"
        />
      </div>
      <NextBtn />
    </>
  );
};

export default ContactSection;
