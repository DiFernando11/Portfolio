import React, { useContext, useState } from 'react';
import { projectsPersonal } from '../../util.js';
import './index.css';
import { Datacontext, actions } from '../../context/context.jsx';

function CarouselProjects({ renderProyects }) {
  const { state, dispatch } = useContext(Datacontext);
  const { currentStep } = state;

  const lengthCardsFavorities = projectsPersonal.length;
  const nextCardFavority = () => {
    dispatch({
      type: actions.SET_CURRENT_STEP,
      payload: currentStep === lengthCardsFavorities - 1 ? 0 : currentStep + 1,
    });
  };
  const prevCardFavority = () => {
    dispatch({
      type: actions.SET_CURRENT_STEP,
      payload: currentStep === 0 ? lengthCardsFavorities - 1 : currentStep - 1,
    });
  };
  return (
    <section className="section_projects">
      <div className="flex_container_section_projects">
        <div className="wrapSectionProjects">
          <button className="carrusel_button" onClick={prevCardFavority}>
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="container_section_projectsr_img_video_projects">
          {projectsPersonal.length &&
            projectsPersonal.map((project, index) => (
              <div key={index}>
                {currentStep === index && (
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
                                  {project.gitHub && (
                                    <li>
                                      <a href={project.gitHub} target="_blank">
                                        <div className="icon_preview">
                                          <i className="bi bi-github"></i>
                                        </div>
                                      </a>
                                    </li>
                                  )}
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {project.video && (
                          <video
                            className="video_image_projects_mobile"
                            autoPlay
                            controls
                          >
                            <source src={project.video} type="video/mp4" />
                          </video>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="wrapSectionProjects">
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
