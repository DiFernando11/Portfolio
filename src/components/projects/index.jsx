import React, { useState } from "react";
import CarouselProjects from "../carouselProjects";

import "./index.css";

function Projects() {
  const [renderProyects, setRenderProjects] = useState(false);
  const handleRenderProyectsVideoOrImage = () => {
    setRenderProjects(!renderProyects);
  };
  return (
    <section id="projects" className="about_projects linkNavigation">
      <div className="container_render_projects_header">
        <div
          onClick={handleRenderProyectsVideoOrImage}
          className={`${
            renderProyects ? "activatedIsRender" : "desactivatedIsRender"
          }`}
        >
          Projects
        </div>
        <div
          onClick={handleRenderProyectsVideoOrImage}
          className={`${
            !renderProyects ? "activatedIsRender" : "desactivatedIsRender"
          }`}
        >
          Video
        </div>
      </div>
      <CarouselProjects renderProyects={renderProyects} />
    </section>
  );
}

export default Projects;
