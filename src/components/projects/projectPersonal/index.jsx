import React from "react";
import ContainerProyect from "../../containerProyect";
import { projects } from "../../../api/projects";

function ProjectPersonal() {
  return (
    <>
      <p className="font-general text-[40px] text-center my-5">
        Personal projects
      </p>
      <div
        className="grid-cols-custom gap-8 w-full justify-center"
      >
        {projects.personalProyects.map((proj) => (
          <ContainerProyect
            containerStyle={proj.containerStyle}
            key={proj.name}
            name={proj.name}
            images={proj.images}
            description={proj.description}
            github={proj.gitHub}
            web={proj.web}
            isFull={false}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectPersonal;
