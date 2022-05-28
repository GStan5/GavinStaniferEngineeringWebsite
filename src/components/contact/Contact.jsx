import React from 'react'
import './contact.scss'


import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      

        <ContactOptions />
        <ContactForm />


      </div>
    </section>
  )
}

export default Contact

// https://discordapp.com/channels/@me/USERID/
// Great Blue#3274
// https://discordapp.com/channels/@me/USERID/283290920441348098