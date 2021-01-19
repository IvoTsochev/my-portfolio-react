import React from "react";
import wordpress from "../../img/wordpress.svg";
import react from "../../img/react.svg";
import html from "../../img/html.svg";
import hosting from "../../img/hosting.svg";

// Styles
import "./Services.scss";
import { H2Title } from "../../StyledComponents-G";

const Services = () => {
  return (
    <div id="services">
      <div className="services-wrapper">
        <H2Title>SERVICES</H2Title>
        <p>
          Variety of services related for building your new website. Most of the
          clients are choosing Wordpress since it's easier to manage. Hosting
          service is also available for storing your website and emails as well.
        </p>
        <div className="services-cards">
          <div className="react-card card">
            <img src={react} alt="react icon" />
            <h3>React</h3>
            <p>Building web apps using React.</p>
          </div>

          <div className="wordpress-card card">
            <img src={wordpress} alt="wordpress icon" />
            <h3>Wordpress</h3>
            <p>
              Building easy to manage small to medium shops and portfolio
              website.
            </p>
          </div>

          <div className="html-card card">
            <img src={html} alt="html icon" />
            <h3>HTML, CSS & JS</h3>
            <p>Simple websites without CMS or framework.</p>
          </div>

          <div className="hosting-card card">
            <img src={hosting} alt="hosting icon" />
            <h3>Hosting</h3>
            <p>Offering a hosting for your website/web app.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
