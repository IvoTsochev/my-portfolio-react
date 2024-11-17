import React from "react";
import {Routes, Route } from "react-router-dom";
// Styles
import "./App.scss";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Hamburger from "./components/Hamburger/Hamburger";
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PasswordReset from './components/troyanskibiznesi/PasswordReset/PasswordReset';

const MainPortfolio = () => {
  return (
    <>
      <Navigation />
      <Hamburger />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          
          <Route 
            path="/troyanskibiznesi/password-reset" 
            element={<PasswordReset />} 
          />
        </Routes>
      </div>
  );
}

export default App;
