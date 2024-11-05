import React from "react";
import "./index.css";

function About() {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 50) || 500;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
    document.body.appendChild(css);
  };
  return (
    <section id="about" className="secction-description linkNavigation">
      <div className="container-about-section">
        <div className="about-section">
          <span className="welcome-destokp welcome-portfolio">
            Welcome to my Portfolio
          </span>
          <div className="container-title-picture">
            <div className="middle">
              <span className="text-type-animation">
                <strong>Hi! I'm Diego Apolo, </strong>
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate='[ "Developer Front-End", "Developer Back-End", "Developer FullStack"]'
                ></span>
              </span>
            </div>
            <img className="avatar-mobile" src={'/aboutImagePortfolio-removebg-preview.png'} alt="avatar" />
          </div>

          <p>
            I am a FullStack developer, responsible and committed to every
            project I start. I have a proactive and tenacious attitude towards
            challenges and also have great teamwork and leadership skills,
            fostering understanding and empathy in interpersonal relationships.
            Enjoy my work and I would appreciate any feedback you can offer.
          </p>
        </div>
        <figure className="avatar-main">
          <img className="avatar-desktop" src={'/aboutImagePortfolio-removebg-preview.png'} alt="avatar" />
        </figure>
      </div>
    </section>
  );
}

export default About;
