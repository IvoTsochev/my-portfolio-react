import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faFile,
  faImages,
  faTools,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Styles
import "./Navigation.scss";

// Scroll to the top of the page func
function Navigation() {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div id="Navigation">
      <ul>
        <Link to="/">
          <a href="#home" onClick={topFunction}>
            <li>
              <FontAwesomeIcon className="icon icon-home" icon={faHome} />
              <span>Home</span>
            </li>
          </a>
        </Link>

        <a href="#about">
          <li>
            <FontAwesomeIcon className="icon icon-about" icon={faAddressCard} />
            <span>About</span>
          </li>
        </a>

        <a href="#resume">
          <li>
            <FontAwesomeIcon className="icon icon-resume" icon={faFile} />
            <span>Resume</span>
          </li>
        </a>

        <a href="#portfolio">
          <li>
            <FontAwesomeIcon className="icon icon-portfolio" icon={faImages} />
            <span>Portfolio</span>
          </li>
        </a>

        <a href="#services">
          <li>
            <FontAwesomeIcon className="icon icon-services" icon={faTools} />
            <span>Services</span>
          </li>
        </a>

        <a href="#contact">
          <li>
            <FontAwesomeIcon
              className="icon icon-contact"
              icon={faAddressBook}
            />
            <span>Contact</span>
          </li>
        </a>

        <li>
          <Link to="/blogs">
            <FontAwesomeIcon className="icon icon-blog" icon={faNewspaper} />
            <span>Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
