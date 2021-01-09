import React from "react";
import "./Resume.scss";
// Styles
import { H2Title } from "../../StyledComponents-G";

const Resume = () => {
  return (
    <div id="resume">
      <div className="resume-wrapper">
        <H2Title>RESUME</H2Title>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="resume-stats">
          <div className="educationAndSumary">
            <h3>Sumary</h3>
            <div className="resume-card">
              <h4>Ivaylo Tsochev</h4>
              <p>
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </p>
              <ul>
                <li>Born in Troyan, lives in Sofia, Bulgaria</li>
                <li>ivo.tsochev@gmail.com</li>
              </ul>
            </div>
            <h3>Education</h3>
            <div className="resume-card">
              <h4>Software Engineering</h4>
              <p>
                <strong>2018 - present</strong>
              </p>
              <p>Softuni University - Sofia</p>
            </div>
            <div className="resume-card">
              <h4>Accounting</h4>
              <p>
                <strong>2007 - 2011</strong>
              </p>
              <p>"St. Cyril and St. Methodius" University of Veliko Tarnovo</p>
            </div>
          </div>
          <div className="professional-experience">
            <h3>Professional Experience</h3>
            <div className="resume-card">
              <h4>Fontend Developer</h4>
              <p>
                <strong>2020 - Present</strong>
              </p>
              <p>LittleVitamin - Sofia</p>
            </div>
            <div className="resume-card">
              <h4>Hosting Technical Support</h4>
              <p>
                <strong>2019 - 2020</strong>
              </p>
              <p>GoDaddy - Sofia</p>
            </div>
            <div className="resume-card">
              <h4>Sales represantive</h4>
              <p>
                <strong>2012 - 2018</strong>
              </p>
              <p>Telenor - Troyan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
