import React from "react";
import "./About.scss";
import Me from "../../img/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Styles
import { H2Title } from "../../StyledComponents-G";

const About = () => {
  return (
    <div id="about">
      <div className="about-wrapper">
        <div className="about-upperSection">
          <H2Title>ABOUT</H2Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            debitis nihil maiores ex laboriosam laborum expedita officia
            delectus quia cupiditate. Esse labore iste doloremque sit saepe et
            corporis quibusdam, exercitationem minima asperiores quia
            voluptates!
          </p>
        </div>
        <div className="about-lowerSection">
          <img src={Me} alt="photo of me" />
          <div className="about-lowerSection-inner">
            <h3>Frontend Developer & Freelancer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quam tempore porro suscipit aut modi, fugiat officiis a assumenda
              fuga!
            </p>
            <div className="about-lowerSection-inner-stats">
              <div className="firstColumn">
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>something</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>something</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>something</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>something</span>
                  </li>
                </ul>
              </div>
              <div className="secondColumn">
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>else</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>else</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>else</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faChevronRight}
                    />{" "}
                    <span>else</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
