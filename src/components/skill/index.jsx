import React from "react";
import "./index.css";
import logoJavaScript from "../../assets/javascript.png";
import logoHtml from "../../assets/html.png";
import logoCss from "../../assets/css.png";
import logoReact from "../../assets/reactjs.png";
import logoRedux from "../../assets/redux.png";
import logoNode from "../../assets/nodejs.png";
import logoPostgrest from "../../assets/postgressql.png";
import logoExpress from "../../assets/express.png";
import logoGitHub from "../../assets/github.png";
import logoTypeScript from "../../assets/typeScript.png";
import logoVite from "../../assets/Vitejs-logo.svg.png"

function Skill() {
  return (
    <section id="skills" className="section-skill linkNavigation" >
      <h3>SKILLS</h3>
      <p>I have a wide range of skills that I am constantly expanding.</p>
      <p>
        With +800 hours of programming based on practices and real projects
        applying this knowledge.
      </p>
      <div className="content-all">
        <div className="content-carrousel">
          <figure>
            <img src={logoJavaScript} alt="logo Javascript" />
            <p>JavaScript</p>
          </figure>
          <figure>
            <img src={logoHtml} alt="logo Html" />
            <p>HTML</p>
          </figure>
          <figure>
            <img src={logoCss} alt="logo Css" />
            <p>CSS</p>
          </figure>
          <figure>
            <img src={logoGitHub} alt="logo GitHub" />
           <p>GitHub</p>
          </figure>
          <figure>
            <img src={logoReact} alt="logo React" />
            <p>React</p>
          </figure>
          <figure>
            <img src={logoRedux} alt="logo Redux" />
            <p>Redux</p>
          </figure>
          <figure>
            <img src={logoTypeScript} alt="logo Typescript" />
            <p>TypeScript</p>
          </figure>
          <figure>
            <img src={logoNode} alt="logo Node" />
            <p>Node.js </p>
          </figure>
          <figure>
            <img src={logoExpress} alt="logo Express" />
            <p>Express</p>
          </figure>
          <figure>
            <img src={logoPostgrest} alt="logo Postgress" />
            <p>Postgress</p>
          </figure>
          <figure>
            <img src={logoVite} alt="logo Postgress" />
            <p>Vite</p>
          </figure>
       
        </div>
      </div>

    </section>
  );
}

export default Skill;
