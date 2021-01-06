import { BrowserRouter as Router } from "react-router-dom";
// Styles
import "./App.scss";
// Importing components
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/ServicesComponent/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hamburger from "./components/Hamburger/Hamburger";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hamburger />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
