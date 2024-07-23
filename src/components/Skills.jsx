// import React from 'react';
// import './App.css';

const Skills = () => {
  return (
    <section id="skill">
      <h1>SKILL & EDUCATION</h1>
      <div className="section-about edu-section">
        <div className="skill-wrapper" data-aos="fade-right">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'C', 'Git', 'Bootstrap'].map(skill => (
            <div className="card" key={skill}>
              <h2>{skill}</h2>
            </div>
          ))}
        </div>
        <div className="education">
          <hr />
          <div className="edu-wrap" data-aos="fade-left">
            <div className="diploma">
              <h2>Software programming diploma</h2>
              <h4>At Navgurukul: School of programming</h4>
              <p>I`m associated with Navgurukul, where my passion for coding and development is nurtured, offering me growth and learning opportunities within a supportive community. This environment has enabled me to enhance my skills and stay ahead in the field.</p>
            </div>
            <div className="degree">
              <h2>Bachelor of Science</h2>
              <h4>At Chhatrapati Shahu Ji Maharaj University Kanpur</h4>
              <p>I am pursuing a Bachelor of Science at CSJM University, (2023-25) specializing in Physics, Math, and Computer Science.</p>
            </div>
            <div className="hsc">
              <h2>12th JHS</h2>
              <h4>At JAN PRIYA SHIKSHA NIKETAN JHS</h4>
              <p>Renowned for its rigorous academic curriculum and holistic development focus, providing a strong foundation in the sciences and shaping my academic journey significantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
