import React, { useEffect } from "react";
import NextBtn from "../NextBtn";

const ContactSection = ({ title, text, img }) => {

  useEffect(() => {
    const bottom = document.getElementsByClassName('hideBeforeFadeInSetup')[0];
    bottom.classList.remove("hideBeforeFadeIn");
  }, [])

  return (
    <>
      <div className="container hideBeforeFadeIn hideBeforeFadeInSetup">
        <div className="left">
          <span className="header">{title}</span>
          <p className="description">{text}</p>
        </div>

        <div
          style={{
            background: `url(${img})`,
            height: "100%",
            backgroundPosition: "52% 100%",
            backgroundRepeat: "no-repeat"
          }}
          className="right fadeInUp"
          id="right"
        />
      </div>
      <NextBtn />
    </>
  );
};

export default ContactSection;
