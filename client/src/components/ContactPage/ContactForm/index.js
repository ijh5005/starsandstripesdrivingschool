import React from 'react'
import './index.css'


const ContactForm = ()=>{
    return(
        <>
        <div class="form-style-8">
  <h2>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible</h2>
  <form action="/mail" method="POST">
    <input type="text" name="name" placeholder="Full Name" />
    <input type="text" name="contact" placeholder="Phone number" />
    <textarea placeholder="Message" name="message" onkeyup="adjust_textarea(this)"></textarea>
    <input type="submit" value="Send Message" />
  </form>
</div>
      
        </>
    )
}

export default ContactForm