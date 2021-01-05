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
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="services-cards">
          <div className="react-card card">
            <img src={react} alt="react icon" />
            <h3>Loren Ipsum</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="wordpress-card card">
            <img src={wordpress} alt="wordpress icon" />
            <h3>Loren Ipsum</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="html-card card">
            <img src={html} alt="html icon" />
            <h3>Loren Ipsum</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="hosting-card card">
            <img src={hosting} alt="hosting icon" />
            <h3>Loren Ipsum</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
