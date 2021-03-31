import Typed from "react-typed";
import { Link, BrowserRouter as Router } from "react-router-dom";
// Styles
import "./Home.scss";
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
      <Router>
        <div className="home-overlay"></div>
        <div className="home-info">
          <h1>Ivaylo Tsochev</h1>
          <div className="im-wrapper">
            <span>I am </span>
            <Typed
              className="Iam-type"
              strings={["Front-end developer", "Freelancer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </div>
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
        </div>
      </Router>
    </div>
  );
}

export default Home;
