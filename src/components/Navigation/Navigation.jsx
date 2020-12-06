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
import "./Navigation.scss";

function Navigation() {
  return (
    <div id="Navigation">
      <ul>
        <li>
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>Home</span>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faAddressCard} />
          <span>About</span>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faFile} />
          <span>Resume</span>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faImages} />
          <span>Portfolio</span>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faTools} />
          <span>Services</span>
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faAddressBook} />
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
