import React, { useState } from "react";
import "./index.css";
import svgFormImage from "../../assets/contact-img.62aa99e0f3b968b5d1ce9eb047f34fc7.svg";
import svgFormWathsaap from "../../assets/WhatsApp.svg.webp";
import { validate } from "../../util";

function Contact() {
  const [inputMesagge, setInputMessage] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const messageUserValue = `Hola Diego, te saluda ${inputMesagge.firstName} ${inputMesagge.lastName}, ${inputMesagge.message}`;
  const handleChange = (e) => {
    setInputMessage({ ...inputMesagge, [e.target.name]: e.target.value });
    setErrors(validate({ ...inputMesagge, [e.target.name]: e.target.value }));
  };
  const handleSenMessage = (e) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=+5930962748639&text=${messageUserValue}`
    );
    setInputMessage({
      firstName: "",
      lastName: "",
      message: "",
    });
  };

  return (
    <div className="space_section_contact">

    <section id="contact" className="section_contact linkNavigation">
      <div className="container_form container_form_image">
        <img className="logoForm" src={svgFormImage} alt="logo contact" />
      </div>

      <div className="container_form">
        <h2>CONTACT ME</h2>
        <form onSubmit={handleSenMessage}>
          <div className="blockFormUser">
            <div className="container_input_name">
              {errors.firstName || !inputMesagge.firstName ? (
                <div className="flexContainerError">
                  <span className="danger">{errors.firstName} </span>
                  <i className="bi bi-exclamation-triangle-fill"></i>
                </div>
              ) : (
                <div className="flexContainerError">
                  <span className="succesfull">succesfull</span>
                  <i className="bi bi-check2-all"></i>
                </div>
              )}
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={inputMesagge.firstName}
                onChange={handleChange}
                placeholder="FirstName"
                required
              />
            </div>
            <div className="container_input_name">
              {errors.lastName || !inputMesagge.lastName ? (
                <div className="flexContainerError">
                  <span className="danger">{errors.lastName} </span>
                  <i className="bi bi-exclamation-triangle-fill"></i>
                </div>
              ) : (
                <div className="flexContainerError">
                  <span className="succesfull">succesfull</span>
                  <i className="bi bi-check2-all"></i>
                </div>
              )}
              <input
                id="lastName"
                name="lastName"
                value={inputMesagge.lastName}
                onChange={handleChange}
                type="text"
                placeholder="LastName"
                required
              />
            </div>
          </div>

          <div className="container_message_textearea">
            {errors.message || !inputMesagge.message ? (
              <div className="flexContainerError">
                <span className="danger">{errors.message} </span>
                <i className="bi bi-exclamation-triangle-fill"></i>
              </div>
            ) : (
              <div className="flexContainerError">
                <span className="succesfull">succesfull</span>
                <i className="bi bi-check2-all"></i>
              </div>
            )}
            <textarea
              className="inputContact"
              name="message"
              id="messageUser"
              value={inputMesagge.message}
              onChange={handleChange}
              placeholder="message..."
              required
            />
          </div>
          <img
            className="logoWathsapp"
            src={svgFormWathsaap}
            alt="logo wathsapp"
          />

          <textarea
            className="mesageContact"
            type="text"
            value={` ${
              !inputMesagge.message
                ? "Write your message above 👆"
                : messageUserValue
            } `}
            disabled
          />
          <button
            type="submit"
            className={`button-82-pushable ${
              Object.entries(errors).length && "dissable_button_form"
            }`}
            role="button"
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Send</span>
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}

export default Contact;
