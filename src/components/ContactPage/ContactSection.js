import React from "react";

const ContactSection = ({ title, text, img }) => {
  return (
    <>
      <div className="container">
        <div className="left">
          <span className="header animated zoomInUp">{title}</span>
          <p className="description animated zoomIn">{text}</p>
        </div>

        <div className="right" id="right">
          <img className="images animated fadeInRight" src={img} />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
