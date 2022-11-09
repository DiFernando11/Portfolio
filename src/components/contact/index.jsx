import React, { useState } from "react";
import "./index.css";
import svgFormImage from "../../assets/contact-img.62aa99e0f3b968b5d1ce9eb047f34fc7.svg";
import svgEmail from "../../assets/gmail.png";
import { validate } from "../../util";

function Contact() {
  const [inputMesagge, setInputMessage] = useState({
    name: "",
    email: "",
    asunto: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const messageUserValue = `Hola Diego, te saluda ${inputMesagge.name}, ${inputMesagge.message}`;
  const handleChange = (e) => {
    setInputMessage({ ...inputMesagge, [e.target.name]: e.target.value });
    setErrors(validate({ ...inputMesagge, [e.target.name]: e.target.value }));
  };
  const handleSenMessage = (e) => {
    e.preventDefault();
    // window.open(
    //   `https://api.whatsapp.com/send?phone=+5930962748639&text=${messageUserValue}`
    // );
    setInputMessage({
      firstName: "",
      lastName: "",
      message: "",
    });
  };
  console.log(inputMesagge, "input");

  return (
    <div className="space_section_contact">
      <section id="contact" className="section_contact linkNavigation">
        <div className="container_form container_form_image">
          <img className="logoForm" src={svgFormImage} alt="logo contact" />
        </div>

        <div className="container_form">
          <h2>CONTACT ME</h2>
          <form
            action="https://formsubmit.co/diegoapolo2011@gmail.com"
            method="POST"
            // onSubmit={handleSenMessage}
          >
            <div className="blockFormUser">
              <div className="container_input_name">
                {errors.name || !inputMesagge.name ? (
                  <div className="flexContainerError">
                    <span className="danger">{errors.name} </span>
                    <i className="bi bi-exclamation-triangle-fill"></i>
                  </div>
                ) : (
                  <div className="flexContainerError">
                    <span className="succesfull">succesfull</span>
                    <i className="bi bi-check2-all"></i>
                  </div>
                )}
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={inputMesagge.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="container_input_name">
                {errors.email || !inputMesagge.email ? (
                  <div className="flexContainerError">
                    <span className="danger">{errors.email} </span>
                    <i className="bi bi-exclamation-triangle-fill"></i>
                  </div>
                ) : (
                  <div className="flexContainerError">
                    <span className="succesfull">succesfull</span>
                    <i className="bi bi-check2-all"></i>
                  </div>
                )}
                <input
                  id="email"
                  name="email"
                  value={inputMesagge.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="container_input_name">
              {errors.asunto || !inputMesagge.asunto ? (
                <div className="flexContainerError">
                  <span className="danger">{errors.asunto} </span>
                  <i className="bi bi-exclamation-triangle-fill"></i>
                </div>
              ) : (
                <div className="flexContainerError">
                  <span className="succesfull">succesfull</span>
                  <i className="bi bi-check2-all"></i>
                </div>
              )}
              <input
                id="asunto"
                name="asunto"
                value={inputMesagge.asunto}
                onChange={handleChange}
                type="text"
                placeholder="Asunto"
                required
              />
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
              src={svgEmail}
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
