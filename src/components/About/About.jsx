import "./About.scss";
import Me from "../../img/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, BrowserRouter as Router } from "react-router-dom";

// Styles
import { H2Title } from "../../StyledComponents-G";

const About = () => {
  return (
    <div id="about">
      <Router>
        <div className="about-wrapper">
          <div className="about-upperSection">
            <H2Title>ABOUT</H2Title>
            <p>
              Passioned about creating awesome websites and delivering the best
              user experience. I started with online courses on Wordpress and
              later on HTML, CSS, JavaScript, and lately with React, and
              creating my first websites for friends like portfolio websites and
              eCommerce.
            </p>
          </div>
          <div className="about-lowerSection">
            <img src={Me} alt="Ivaylo Tsochev" />
            <div className="about-lowerSection-inner">
              <h3>Frontend Developer & Freelancer</h3>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quam tempore porro suscipit aut modi, fugiat officiis
                a assumenda fuga!
              </p> */}
              <div className="about-lowerSection-inner-stats">
                <div className="firstColumn">
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>Birthday: </span>
                      20 July 1988
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>Age: </span>
                      32
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>Website: </span>
                      <Link
                        to={{ pathname: "https://www.ivaylotsochev.com" }}
                        target="_blank"
                      >
                        www.ivaylotsochev.com
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>City: </span>
                      Sofia, Bulgaria
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
                      <span>Degree: </span>
                      Bachelor Accountant
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>Email: </span>
                      ivo.tsochev@gmail.com
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>Freelance: </span>
                      Available
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={faChevronRight}
                      />{" "}
                      <span>Employer: </span>
                      <Link
                        to={{ pathname: "https://www.littlevitamin.com" }}
                        target="_blank"
                      >
                        Little Vitamin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p> */}
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default About;
