import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// Styles
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <h2>Ivaylo Tsochev</h2>
      <p>
        Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
        fuga maxime saepe commodi placeat.
      </p>
      <div className="footer-social">
        <Router>
          <ul className="social-media">
            <li className="twitter">
              <Link
                to={{ pathname: "https://twitter.com/Ivo_Tsochev" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>

            <li className="facebook">
              <Link
                to={{ pathname: "https://www.facebook.com/Ivo.Tsochev/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>

            <li className="instagram">
              <Link
                to={{ pathname: "https://www.instagram.com/ivotsochev/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>

            <li className="linkedin">
              <Link
                to={{ pathname: "https://www.linkedin.com/in/ivaylotsochev/" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>

            <li className="github">
              <Link
                to={{ pathname: "https://github.com/IvoTsochev" }}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
          </ul>
        </Router>
      </div>
      <p>© Copyright IvayloTsochev. All Rights Reserved</p>
      <p>Designed by If40</p>
    </div>
  );
};

export default Footer;
