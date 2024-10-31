import React, { useContext, useState } from "react";
import "./index.css";
import { Datacontext } from "../../context/context";
import ProjectPersonal from "./projectPersonal";
import ContributionProjects from "./contributionProjects";
import SchoolProjects from "./studentsProyects";

function Projects() {
  const { state } = useContext(Datacontext);
  const { currentStep } = state;
  const [renderProyects, setRenderProjects] = useState(false);
  const handleRenderProyectsVideoOrImage = () => {
    setRenderProjects(!renderProyects);
  };

  return (
    <section
      id="projects"
      className="about_projects px-16 linkNavigation w-full sm:w-[90%] max-w-[1500px]"
    >
      <div className="container_render_projects_header">
        <div
          onClick={handleRenderProyectsVideoOrImage}
          className={`${
            renderProyects ? "activatedIsRender" : "desactivatedIsRender"
          }`}
        >
          Projects
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <ProjectPersonal />
        <ContributionProjects />
        <SchoolProjects />
      </div>
    </section>
  );
}

export default Projects;
