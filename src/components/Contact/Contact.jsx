import React from "react";
import emailjs from "emailjs-com";
// Styles
import { H2Title } from "../../StyledComponents-G";
import "./Contact.scss";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmvx9rq",
        "template_m709w7r",
        e.target,
        "user_t00SWW3rzOZdhMddvrdir"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact">
      <div className="contact-wrapper">
        <H2Title>CONTACT</H2Title>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="name-and-email-container">
            <input
              className="contact-name"
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <input
              className="contact-email"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <input
            className="contact-subject"
            type="text"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="contact-message"
            placeholder="Message"
            name="message"
            cols="30"
            rows="10"
          />
          <input className="contact-submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
