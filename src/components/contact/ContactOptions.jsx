import React from 'react'


import { MdEmail } from 'react-icons/md'
import { FaDiscord } from 'react-icons/fa'

const ContactOptions = () => {
  return (
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>GavinStaniferEngineering@gmail.com</h5>
            <a href="mailto:GavinStaniferEngineering@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>Contact Me Instantly</h5>
            <a href="https://discord.gg/eUrQCbhekY" target="_blank" rel="noopener noreferrer">Join Discord</a>
          </article>
        </div>
  )
}

export default ContactOptions