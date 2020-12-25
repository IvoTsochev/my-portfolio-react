import React from "react";
import "./Home.scss";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div id="home">
      <div className="home-overlay"></div>
      <div className="home-info">
        <h1>Ivaylo Tsochev</h1>
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
        <ul className="social-media">
          <li className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li className="instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className="github">
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
