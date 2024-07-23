import { useEffect } from 'react';
// import './App.css';
// import Particles from 'particles.js';
import Typed from 'typed.js';
// import img2 from '../img/bg.jpg';

const Home = () => {
  useEffect(() => {
    // Particles.init({
    //   selector: '#particles-js',
    // });
    new Typed('.auto-type', {
      strings: ["Frontend Developer", "React Developer"],
      typeSpeed: 250,
      backSpeed: 100,
      loop: true,
    });
  }, []);

  return (
    <section id="home">
      <div id="heading">
        <h1>
          Hi, I am Mohit Kamal.
          <br /> <span className="auto-type"></span>
        </h1>
        <button className="but"><a href="#about">view my work</a></button>
      </div>
      <div id="particles-js"></div>
      <span className="js-count-particles"></span>
    </section>
  );
};

export default Home;
