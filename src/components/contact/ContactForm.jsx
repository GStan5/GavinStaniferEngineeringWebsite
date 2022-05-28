import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const ContactForm = () => {

    const form = useRef();
    const [emailResult, setEmailResult] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        
        emailjs.sendForm('service_ftesndg', 'template_99d9us8', form.current, '2kC4-pnG4XjbuUAom')
        .then((result) => {
            console.log(result.text);
            setEmailResult("Email sent successfully");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            setEmailResult("Failed to send email");
        });
    };

    return (
        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required/>
                <input type="text" name='email' placeholder='Your Email Address' required/>
                <input type="text" name='subject' placeholder='Email Subject' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                {emailResult && <p>{emailResult}</p>}
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm