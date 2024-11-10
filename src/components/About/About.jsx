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
            <img src={ Me } alt="Ivaylo Tsochev" />
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
                        icon={ faChevronRight }
                      />{ " " }
                      <span>Age: </span>
                      34
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={ faChevronRight }
                      />{ " " }
                      <span>Website: </span>
                      <Link
                        to={ { pathname: "https://www.ivaylotsochev.com" } }
                        target="_blank"
                      >
                        www.ivaylotsochev.com
                      </Link>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={ faChevronRight }
                      />{ " " }
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
                        icon={ faChevronRight }
                      />{ " " }
                      <span>Degree: </span>
                      Bachelor Accountant
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={ faChevronRight }
                      />{ " " }
                      <span>Email: </span>
                      ivaylo@headless.team
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className="arrow-icon"
                        icon={ faChevronRight }
                      />{ " " }
                      <span>Employer: </span>
                      Devi8 Studio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
