// import React from 'react';
// import './App.css';
import project1 from '../img/E-Commerce website.jpeg';
import project2 from '../img/Swiggy.jpeg';
import project3 from '../img/Weather.jpeg';
import project4 from '../img/Portfolio.jpeg';
import project5 from '../img/shopping-.jpg';

const Projects = () => {
  const projects = [
    {
      img: project1,
      title: 'Shipping Website',
      link: 'https://e-comm-self-xi.vercel.app//',
      description: 'Using API integration, Zustand in React',
    },
    {
      img: project2,
      title: 'Food Delivery Website',
      link: 'https:///kamalswiggy.netlify.app//',
      description: 'Using API integration, Redux, and custom hooks',
    },
    {
      img: project3,
      title: 'Weather App',
      link: '',
      description: 'Using API integration in React',
    },
    {
      img: project4,
      title: 'Portfolio Website',
      link: '',
      description: 'I am building a portfolio using React to display my projects,.',
    },
    {
      img: project5,
      title: 'E-Commerce Site Page',
      link: 'https://kmohit01-e-com.netlify.app//',
      description: 'Developing a static e-commerce site with HTML, CSS.',
    },
  ];

  return (
    <section id="project">
      <h1>Projects</h1>
      <div className="section-about project-wrapper" id="pro">
        {projects.map((project, index) => (
          <div className="cards-project" data-aos="fade-up" key={index}>
            <div className="cards">
              <div className="image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="details">
                <div className="center">
                  <h1>{project.title}</h1>
                  <br /><br />
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                    <h4>Deploy link</h4>
                  </a>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
