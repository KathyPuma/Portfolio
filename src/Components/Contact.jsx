import React from "react";
import './Contact.css'

function Contact() {
    return (
        <div className='Contact-stage'>
            <form className="contact-form" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/kathypuma@pursuit.org" method="post">
                <fieldset className="contact-form-inputs">
                    <label htmlFor="name-label">Name:</label>
                    <input type="text" name="name" className="name-label" placeholder="Name" required></input>
                    <label htmlFor="email-label">Email:</label>
                    <input type="email" name="_replyto" className="email-label" placeholder="email@domain.tld" required ></input>
                    <label htmlFor="message-label">Message:</label>
                    <textarea rows="5" name="message" className="message-label" placeholder="Your message here..." required></textarea>
                    <input type="hidden" name="_subject" className="email-subject" value="Contact Form Submission"></input>
                </fieldset>
                <input type="submit" value="Submit" className='submit-button'></input>
            </form>
        </div>
    );
}

export default Contact