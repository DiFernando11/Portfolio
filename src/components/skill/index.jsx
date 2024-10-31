import React from "react";
import "./index.css";
import { skills } from "../../api/skills";

function Skill() {
  return (
    <section id="skills" className="section-skill linkNavigation">
      <h3>SKILLS</h3>
      <p>I have a wide range of skills that I am constantly expanding.</p>
      <p>
        With +800 hours of programming based on practices and real projects
        applying this knowledge.
      </p>
      <div className="content-all">
        <div className="content-carrousel">
          {skills.map((skill) => (
            <figure key={skill.name}>
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
