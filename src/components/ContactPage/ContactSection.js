import React from "react";
import NextBtn from "../NextBtn";

const ContactSection = ({ title, text, img }) => {
  return (
    <>
      <div className="container">
        <div className="left">
          <span className="header animated zoomInUp">{title}</span>
          <p className="description animated zoomIn">{text}</p>
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
