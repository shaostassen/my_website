// File: src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:ses439@cornell.edu"><FaEnvelope /> ses439@cornell.edu</a></p>
      <p>
        <a href="https://www.linkedin.com/in/shaostassen/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a> ・ 
        <a href="https://github.com/shaostassen" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
      </p>
    </section>
  );
}

export default Contact;