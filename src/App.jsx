import React from "react";
import {Routes, Route } from "react-router-dom";
// Styles
import "./App.scss";
import "./index.css";
import PasswordReset from './components/troyanskibiznesi/PasswordReset/PasswordReset';
import Portfolio from './Pages/Home';

const MainPortfolio = () => {
  return (
    <>
      <Portfolio />
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
