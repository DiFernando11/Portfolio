import React, { useState } from "react";
import { projectsPersonal } from "../../util.js";
import "./index.css";

function CarouselProjects({ renderProyects }) {
  const [cardFavoriteCurrent, setCardFavoriteCurrent] = useState(0);

  // const projectsPersonal = [
  //   {
  //     name: "COUNTRIES APP",
  //     project: projectCountries,
  //     video: videoProjectCountries,
  //     gitHub: "https://github.com/DiFernando11/PI-Countries",
  //     aplication: "https://countries-app-api.vercel.app",
  //     technologies: [
  //       logoHtml,
  //       logoCss,
  //       logoJavaScript,
  //       logoReact,
  //       logoRedux,
  //       logoNode,
  //       logoExpress,
  //       logoPostgrest,
  //     ],
  //   },
  //   {
  //     name: "MOVIES APP",
  //     project: projectMovies,
  //     video: videoProjectMovies,
  //     gitHub: "https://github.com/DiFernando11/AppMoviesApiRest",
  //     aplication: "https://difernando11.github.io/AppMoviesApiRest/",
  //     technologies: [logoHtml, logoCss, logoJavaScript],
  //   },
  //   {
  //     name: "WEATHER APP",
  //     project: projectWather,
  //     video: videoProjectWeather,
  //     gitHub: "https://github.com/DiFernando11/Weather-App",
  //     aplication:
  //       "https://62f2f16dc8eb5839d7f16bcd--cerulean-biscuit-c2f248.netlify.app/",
  //     technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  //   },
  //   {
  //     name: "TODO LIST APP",
  //     project: projectTodos,
  //     video: videoProjectTodos,
  //     gitHub: "https://github.com/DiFernando11/cursobasicojsreact",
  //     aplication: "https://difernando11.github.io/cursobasicojsreact/",
  //     technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  //   },
  //   {
  //     name: "POKEDEX",
  //     project: projectPokedex,
  //     video: videoProjectPokedex,
  //     gitHub: "https://github.com/DiFernando11/pokedex",
  //     aplication: "https://difernando11.github.io/pokedex/",
  //     technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  //   },
  //   {
  //     name: "DOGS APP",
  //     project: projectDog,
  //     video: videoProjectDogs,
  //     gitHub: "https://github.com/DiFernando11/ConsumoApiDogApi",
  //     aplication: "https://difernando11.github.io/ConsumoApiDogApi/",
  //     technologies: [logoHtml, logoCss, logoJavaScript, logoReact],
  //   },
  // ];
  const lengthCardsFavorities = projectsPersonal.length;

  const nextCardFavority = () => {
    setCardFavoriteCurrent(
      cardFavoriteCurrent === lengthCardsFavorities - 1
        ? 0
        : cardFavoriteCurrent + 1
    );
  };
  const prevCardFavority = () => {
    setCardFavoriteCurrent(
      cardFavoriteCurrent === 0
        ? lengthCardsFavorities - 1
        : cardFavoriteCurrent - 1
    );
  };
  return (
    <section className="section_projects">
      <div className="flex_container_section_projects">
        <div className="wrap">
          <button className="carrusel_button" onClick={prevCardFavority}>
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="container_section_projectsr_img_video_projects">
          {projectsPersonal.length &&
            projectsPersonal.map((project, index) => (
              <div key={index}>
                {cardFavoriteCurrent === index && (
                  <div key={index} className="container_img_video_projects">
                    {!renderProyects ? (
                      <div className="container_image_preview">
                        <img
                          className="video_image_projects_mobile"
                          src={project.project}
                        />
                        <div className="text_img_preview">
                          <div className="border_box_animation">
                            <ul>
                              <li
                                className="container_tecnologies"
                                id={project.name}
                              >
                                {project.technologies.length
                                  ? project.technologies.map(
                                      (technology, index) => (
                                        <img
                                          key={index}
                                          src={technology}
                                          alt={project.name}
                                        />
                                      )
                                    )
                                  : null}
                              </li>
                              <div className="container_flex_previewIcons">
                                <li>
                                  <h4>{project.name}</h4>
                                </li>
                                <div className="flex_icon_mobile">
                                  <li>
                                    <a
                                      href={project.aplication}
                                      target="_blank"
                                    >
                                      <div className="icon_preview">
                                        <i className="bi bi-eye"></i>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a href={project.gitHub} target="_blank">
                                      <div className="icon_preview">
                                        <i className="bi bi-github"></i>
                                      </div>
                                    </a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <video
                        className="video_image_projects_mobile"
                        autoPlay
                        controls
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="wrap">
          <button className="carrusel_button" onClick={nextCardFavority}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="container_button_mobileCarrouselProjects">
        <div className="wrap_mobile">
          <button className="carrusel_button" onClick={prevCardFavority}>
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="wrap_mobile">
          <button className="carrusel_button" onClick={nextCardFavority}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarouselProjects;
