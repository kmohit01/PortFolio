// import React from 'react';
// import './App.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-about">
        <div className="contact-wrap">
          <h1>CONTACT</h1>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" className="form-control" id="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea className="form-control" id="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="but">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
