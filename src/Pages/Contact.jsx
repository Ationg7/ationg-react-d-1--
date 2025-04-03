import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <input type="text" placeholder="Full Name" />
    <input type="email" placeholder="Email Address" />
    <input type="text" placeholder="Phone Number" />
    <textarea placeholder="Have anything to say?"></textarea>
    <button type="submit">Send</button>
  </form>
</section>
  );
};

export default Contact;
