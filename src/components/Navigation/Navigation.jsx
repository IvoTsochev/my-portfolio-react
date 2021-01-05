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
// Styles
import "./Navigation.scss";

function Navigation() {
  return (
    <div id="Navigation">
      <ul>
        <a href="#home">
          <li>
            <FontAwesomeIcon className="icon" icon={faHome} />
            <span>Home</span>
          </li>
        </a>

        <a href="#about">
          <li>
            <FontAwesomeIcon className="icon" icon={faAddressCard} />
            <span>About</span>
          </li>
        </a>

        <a href="#resume">
          <li>
            <FontAwesomeIcon className="icon" icon={faFile} />
            <span>Resume</span>
          </li>
        </a>

        <a href="portfolio">
          <li>
            <FontAwesomeIcon className="icon" icon={faImages} />
            <span>Portfolio</span>
          </li>
        </a>

        <a href="#services">
          <li>
            <FontAwesomeIcon className="icon" icon={faTools} />
            <span>Services</span>
          </li>
        </a>

        <a href="#contact">
          <li>
            <FontAwesomeIcon className="icon" icon={faAddressBook} />
            <span>Contact</span>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Navigation;
