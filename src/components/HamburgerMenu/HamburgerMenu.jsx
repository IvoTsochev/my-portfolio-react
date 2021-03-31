// Styles
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faFile,
  faImages,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./HamburgerMenu.scss";

const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  let closeHamHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamMenu>
      <ul>
        <Link to="/">
          <a href="#home" onClick={closeHamHandler}>
            <li>
              <FontAwesomeIcon className="icon icon-home" icon={faHome} />
              <span>Home</span>
            </li>
          </a>
        </Link>

        <a href="#about" onClick={closeHamHandler}>
          <li>
            <FontAwesomeIcon className="icon icon-about" icon={faAddressCard} />
            <span>About</span>
          </li>
        </a>

        <a href="#resume" onClick={closeHamHandler}>
          <li>
            <FontAwesomeIcon className="icon icon-resume" icon={faFile} />
            <span>Resume</span>
          </li>
        </a>

        <a href="#portfolio" onClick={closeHamHandler}>
          <li>
            <FontAwesomeIcon className="icon icon-portfolio" icon={faImages} />
            <span>Portfolio</span>
          </li>
        </a>
{/* 
        <a href="#services" onClick={closeHamHandler}>
          <li>
            <FontAwesomeIcon className="icon icon-services" icon={faTools} />
            <span>Services</span>
          </li>
        </a> */}

        <a href="#contact" onClick={closeHamHandler}>
          <li>
            <FontAwesomeIcon
              className="icon icon-contact"
              icon={faAddressBook}
            />
            <span>Contact</span>
          </li>
        </a>

        <li onClick={closeHamHandler}>
          <Link to="/blogs">
            <FontAwesomeIcon className="icon icon-blog" icon={faNewspaper} />
            <span>Blog</span>
          </Link>
        </li>
      </ul>
    </HamMenu>
  );
};

export default HamburgerMenu;

const HamMenu = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: white;
    li {
      padding: 1rem;
      a {
        color: rgb(30, 150, 230);
      }
    }
    a {
      text-decoration: none;
      li {
        padding: 1rem;
        color: rgb(30, 150, 230);
      }
    }
    span {
      margin-left: 0.8rem;
    }
  }
`;
