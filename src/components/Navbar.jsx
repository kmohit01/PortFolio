// import React from 'react';
// import './App.css';
// import logo from '../img/logo.jpeg';
// import menuIcon from '../img/Menu.jpeg';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul><img src={logo} alt="Logo" /></ul>
//       <ul className="menu-bar">
//         <img src={menuIcon} alt="Menu" />
//       </ul>
//       <ul className="navsection">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skill">Skill</a></li>
//         <li><a href="#project">Project</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import logo from '../img/fire.gif';
import menuIcon from '../img/Menu.jpeg';
// import closeIcon from '../img/Checklist.jpeg'; // Add a close icon

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav>
      <ul><img src={logo} alt="Logo" /></ul>
      <ul className="menu-bar" onClick={toggleSidebar}>
        <img src={menuIcon} alt="Menu" />
      </ul>
      <ul className="navsection">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#skill" onClick={toggleSidebar}>Skill</a>
        <a href="#project" onClick={toggleSidebar}>Project</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
