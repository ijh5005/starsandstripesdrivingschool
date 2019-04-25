import React from "react";


const ContactSection = ({ title, text, img }) => {
  return (
    <>
      <div className="container">
        <div className="left">
          <span className="header animated zoomInUp">{title}</span>
          <p className="description animated zoomIn">{text}</p>

        
      
        </div>

        <div 
        style={{background:`url(${img})`,height:'100%'}}
        className="right fadeInUpBig" id="right"
        
        >
        
        
        </div>
    
      </div>
    </>
  );
};

export default ContactSection;
