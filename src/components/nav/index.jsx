import React, { useState } from "react";
import "./index.css";

function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const toggleButton = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <header>
      <nav>
        <h2 className="logoStaff">Diego Apolo</h2>
        <button
          aria-label={`${toggleNav ? "menu abierto" : "menu cerrado"}`}
          onClick={toggleButton}
          className="buttonListMenu"
        >
          <i className="bi bi-list"></i>
        </button>
        <ul className={`${toggleNav ? "nav_menu_visible" : "navMenu"}`}>
          <li>
            <a href="#about">
              <span>About</span>
              <span>
                <i className="bi bi-house-door"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <span>Skills</span>
              <span>
                <i className="bi bi-stars"></i>
              </span>
            </a>
          </li>

          <li>
            <a href="#projects">
              <span>Projects</span>
              <span>
                <i className="bi bi-briefcase"></i>
              </span>
            </a>
          </li>
          <li className="logoSocialNetworks">
            <a href="https://github.com/DiFernando11?tab=repositories" target="_blank">
              <span>
                <i className="bi bi-github"></i>
              </span>
              <span style={{ borderBottom: "none" }}>
                <i className="bi bi-arrow-up-right socialArrow"></i>
              </span>
            </a>
          </li>

          <li className="logoSocialNetworks">
            <a href="https://www.linkedin.com/in/diego-fernando-apolo-guachizaca-324977248/" target="_blank">
              <span>
                <i className="bi bi-linkedin "></i>
              </span>
              <span style={{ borderBottom: "none" }}>
                <i className="bi bi-arrow-up-right socialArrow"></i>
              </span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="navContact">Contact me</span>
              <span>
                <i className="bi bi-telephone-inbound"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
