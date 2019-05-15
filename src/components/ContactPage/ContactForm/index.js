import React from 'react'
import './index.css'

const ContactForm = ()=>{
    return(
        <>
        <div className="contactform-container">
        <p className="formHeader">Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible</p>
        <div className="form-container">
            <form action="/page/contact" method="POST">
                <label for="name">Name*</label>
                <input name="name" className="name" type="text"/>
                <br/>
                <label for="email">Email*</label>
                <input name="email" className="email" type="text"/>
                <br/>
                <label for="phone">Phone*</label>
                <input name="phone" className="phone" type="text"/>
                <br/>
                <label for="message">Message*</label>
                <textarea name="message" placeholder="Send us a message" className="message" type="text"/>
                <br/>
                <button class="contactform-submit">Send Message</button>

            </form>
            </div>
       </div>
        </>
    )
}

export default ContactForm