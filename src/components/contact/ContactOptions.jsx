import React from "react";

import { MdEmail } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";

const ContactOptions = () => {
  return (
    <div className="contact__options">
      <article className="contact__option">
        <BsChatTextFill className="contact__option-icon" />
        <h4>Text or Call</h4>
        <h5>Contact Me Instantly</h5>
        <a href="sms:9285871309" target="_blank" rel="noopener noreferrer">
          (928) 587-1309
        </a>
      </article>

      <article className="contact__option">
        <MdEmail className="contact__option-icon" />
        <h4>Email</h4>
        <h5>GavinStaniferEngineering@gmail.com</h5>
        <a href="mailto:GavinStaniferEngineering@gmail.com">Send a Message</a>
      </article>
    </div>
  );
};

export default ContactOptions;
