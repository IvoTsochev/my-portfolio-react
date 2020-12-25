import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div id="skills">
      <div className="skills-wrapper">
        <div className="skills-upperSection">
          <h2>SKILLS</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
