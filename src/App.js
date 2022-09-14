import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// Styles
import "./App.scss";
// Importing components
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Hamburger from "./components/Hamburger/Hamburger";
const About = React.lazy(() => import("./components/About/About"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Resume = React.lazy(() => import("./components/Resume/Resume"));
const Portfolio = React.lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
// import Blogs from "./Pages/Blogs/Blogs";

function App () {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Navigation />
          <Hamburger />
          <Home />
          <Suspense fallback={ <div>Loading...</div> }>
            <About />
            <Skills />
            <Resume />
            <Portfolio />
            {/* <Services /> */ }
            <Contact />
          </Suspense>
        </Route>
        {/* <Route path="/blogs">
          <Blogs />
        </Route> */}
      </Switch>
      <Suspense fallback={ <div>Loading...</div> }>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
