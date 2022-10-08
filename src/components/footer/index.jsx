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
import logoVite from "../../assets/Vitejs-logo.svg.png";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <span>
            Studies: Soy Henrry
            <img
              src="https://assets.soyhenry.com/henry-landing/assets/emojis/rocket.png"
              alt="logo soy henrry"
            />
          </span>

          <span >
            Platzi
            <img
              src="https://static.platzi.com/media/blog/unnamed-8089fc33-6322-4bd3-85de-1da032257d4b.png"
              alt="logo platzi"
            />
          </span>
          <span className="logoUtmach">
            Utmach
            <img
              src="http://www.utmachala.edu.ec/portalwp/wp-content/uploads/2015/08/LOGO_OUT.png"
              alt="logo utmach"
            />
          </span>
        </li>
        <li className="logoTechnologies">
          <img className="logoTablet" src={logoGitHub} alt="logoGitHub" />
          <img className="logoTablet" src={logoHtml} alt="logoHtml" />
          <img className="logoTablet" src={logoCss} alt="logoCss" />
          <img src={logoJavaScript} alt="logoJavaScript" />
          <img src={logoReact} alt="logoReact" />
          <img src={logoRedux} alt="logoRedux" />
          <img className="logoTablet" src={logoVite} alt="logoVite" />
          <img src={logoTypeScript} alt="logoTypeScript" />
          <img src={logoNode} alt="logoNode" />
          <img className="logoTablet" src={logoExpress} alt="logoExpress" />
          <img src={logoPostgrest} alt="logoPostgrest" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
