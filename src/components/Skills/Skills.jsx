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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
              <div className="skill sass">90%</div>
            </div>
            <p>Wordpress</p>
            <div className="skill-container">
              <div className="skill wordpress">90%</div>
            </div>
          </div>
          <div className="skills-rightColumn">
            <p>REACT</p>
            <div className="skill-container">
              <div className="skill react">90%</div>
            </div>
            <p>UI & UX</p>
            <div className="skill-container">
              <div className="skill ui">90%</div>
            </div>
            <p>REACT REDUX</p>
            <div className="skill-container">
              <div className="skill redux">90%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
