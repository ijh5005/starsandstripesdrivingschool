import React from 'react'
import './index.css'


const ContactForm = ()=>{
    return(
        <>
        <div class="form-style-8">
  <h2>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible</h2>
  <form>
    <input type="text" name="field1" placeholder="Full Name" />
    <input type="text" name="field2" placeholder="Phone number" />
    <textarea placeholder="Message" onkeyup="adjust_textarea(this)"></textarea>
    <input type="button" value="Send Message" />
  </form>
</div>
      
        </>
    )
}

export default ContactForm