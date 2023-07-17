import React, { useContext, useState } from 'react';
import CarouselProjects from '../carouselProjects';

import './index.css';
import { projectsPersonal } from '../../util';
import { Datacontext } from '../../context/context';

function Projects() {
  const { state, dispatch } = useContext(Datacontext);
  const { currentStep } = state;
  const [renderProyects, setRenderProjects] = useState(false);
  const handleRenderProyectsVideoOrImage = () => {
    setRenderProjects(!renderProyects);
  };
  const isThereVideo = projectsPersonal[currentStep].video;
  return (
    <section id="projects" className="about_projects linkNavigation">
      <div className="container_render_projects_header">
        <div
          onClick={handleRenderProyectsVideoOrImage}
          className={`${
            renderProyects ? 'activatedIsRender' : 'desactivatedIsRender'
          }`}
        >
          Projects
        </div>
        {isThereVideo ? (
          <div
            onClick={handleRenderProyectsVideoOrImage}
            className={`${
              !renderProyects ? 'activatedIsRender' : 'desactivatedIsRender'
            }`}
          >
            Video
          </div>
        ) : null}
      </div>
      <CarouselProjects renderProyects={renderProyects} />
    </section>
  );
}

export default Projects;
