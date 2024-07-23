// import React from 'react';
// import './App.css';
import gif from '../img/work-fr.jpg';

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>
      <div className="section-about">
        <div className="about-text" data-aos="fade-right">
          <h2>
          I am a frontend enthusiast and dedicated React.js developer, having embarked on this journey in November 1. My proactive attitude and eagerness to tackle new challenges make me a valuable team member. Driven by a passion for creating impactful, user-friendly web applications, I continuously strive to enhance my skills and stay current with the latest trends and technologies in web development.
          </h2>
        </div>
        <div className="gif">
          <img src={gif} data-aos="fade-left" alt="Gif" />
        </div>
        {/* <div id="particle2-js"></div> */}
      </div>
    </section>
  );
};

export default About;
