import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>develop.xyzr@gmail.com</h5>
            <a href="mailto:develop.xyzr@gmail.com">Send a message</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
