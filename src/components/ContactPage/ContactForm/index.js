import React, { useState } from 'react'
import axios from "axios";
import './index.css'


const ContactForm = () => {

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const nameChange = (e) => {
    const value = e.target.value;
    setName(value)
  }

  const contactChange = (e) => {
    const value = e.target.value;
    setContact(value)
  }

  const messageChange = (e) => {
    const value = e.target.value;
    setMessage(value)
  }

  const submitEmail = (e) => {
    e.preventDefault();
    const params = {
      name,
      contact,
      message
    }
    axios.post("https://blakioserver.herokuapp.com/mail", params)
        .then(data => {
          console.log(data);
        }).catch(err => console.log(err));
    setName("")
    setContact("")
    setMessage("Message sent! Thanks")
  }

  return (<div id="contactForm">
    <p className="smallText">Contact Us</p>
    <div class="form-style-2">
      <form action="" method="post">
        <label for="field1">
          <span>Name <span class="required">*</span></span>
          <input type="text" class="input-field" name="field1" value={name} onChange={nameChange.bind(this)}/>
        </label>
        <label for="field2">
          <span>Email <span class="required">*</span></span>
          <input type="text" class="input-field" name="field2" value={contact} onChange={contactChange.bind(this)}/>
        </label>
        <label for="field5"><span>Message <span class="required">*</span></span>
          <textarea name="field5" class="textarea-field" value={message} onChange={messageChange.bind(this)}></textarea></label>
        <label>
        <span> </span><input type="submit" value="Submit" onClick={submitEmail.bind(this)} /></label>
      </form>
    </div>
  </div>)
}

export default ContactForm
