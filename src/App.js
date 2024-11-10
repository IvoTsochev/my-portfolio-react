import React from "react";
// Styles
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Hamburger from "./components/Hamburger/Hamburger";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App () {
  return (
    <div className="App">
      <Navigation />
      <Hamburger />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
