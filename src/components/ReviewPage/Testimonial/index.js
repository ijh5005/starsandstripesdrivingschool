import React from 'react'
import "./index.css";
import profile1 from '../profile1.png'
import profile2 from '../profile2.png'
import profile4 from '../profile4.jpg'

const Testimonial = ()=>{
        return(
            <>
            <div className="container">
            <div style={{background:`url(${profile1})`,backgroundPosition:'center'}} className="profile"> </div>
            <div className="review">
            I had a refresher driving class today with my instructor from Stars and Stripes Driving School.  I can't say enough good things about my experience.
            <p className="quote">- Issiah Harrison</p>
            
            </div>
            <br/>
        
            <div style={{background:`url(${profile2})`}} className="profile2"> </div>
            <br/>
            
            <div className="review2">
            As a parent, insuring that my child becomes a defensive, competent driver is extremely important to me.   I am so grateful to have found this driving school!!
            <p className="quote">- Michelle Miller</p>
            
            </div>
            </div>
           
           
            </>
        )
}

export default Testimonial