import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faFile,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className="navigation-container">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressCard} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} />
        </li>
        <li>
          <FontAwesomeIcon icon={faImages} />
        </li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navigation;
