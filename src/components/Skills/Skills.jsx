import React from "react";
import "./Skills.scss";
import { H2Title } from "../../StyledComponents-G";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-wrapper">
        <div className="skills-upperSection">
          <H2Title>SKILLS</H2Title>
          <p>
            Most of the skills I have and constantly want to improve, are front-end oriented and the main priority is React.
          </p>
        </div>
        <div className="skills-lowerSection">
          <div className="skills-leftColumn">
            <p>HTML</p>
            <div className="skill-container">
              <div className="skill html">90%</div>
            </div>
            <p>SASS</p>
            <div className="skill-container">
              <div className="skill sass">50%</div>
            </div>
            <p>Wordpress</p>
            <div className="skill-container">
              <div className="skill wordpress">65%</div>
            </div>
          </div>
          <div className="skills-rightColumn">
            <p>REACT</p>
            <div className="skill-container">
              <div className="skill react">43%</div>
            </div>
            <p>JavaScript</p>
            <div className="skill-container">
              <div className="skill javascript">68%</div>
            </div>
            <p>REACT REDUX & CONTEXT</p>
            <div className="skill-container">
              <div className="skill redux">10%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
