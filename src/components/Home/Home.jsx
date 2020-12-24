import React from "react";
import "./Home.scss";
import Typed from "react-typed";

function Home() {
  return (
    <div id="home">
      <div className="home-overlay"></div>
      <div className="home-info">
        <h1>Ivaylo Tsochev</h1>
        <br />
        <div className="im-wrapper">
          <span>I am </span>
          <Typed
            className="Iam-type"
            strings={["Frontend developer", "Freelancer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </div>
      </div>
    </div>
  );
}

export default Home;
