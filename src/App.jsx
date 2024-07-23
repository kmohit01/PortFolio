// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Divider from './components/Divider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Divider/>
      <About />
      <Divider/>
      <Skills />
      <Divider/>
      <Projects />
      <Divider/>
      <Contact />
      <Divider/>
      <Footer />
    </div>
  );
}

export default App;
