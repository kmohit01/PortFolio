import { useEffect } from 'react';
// import './App.css';
import Typed from 'typed.js';

const Footer = () => {
  useEffect(() => {
    new Typed('.auto-type2', {
      strings: ["Made by Mohit Kamal"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
  }, []);

  return (
    <footer id="footer">
      <div className="footer-text">
        <h2 className="auto-type2"></h2>
      </div>
    </footer>
  );
};

export default Footer;
