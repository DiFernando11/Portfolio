import React from "react";
import { projects } from "../../../api/projects";
import ContainerProyect from "../../containerProyect";
function SchoolProjects() {
  return (
    <>
      <p className="font-general text-[40px] text-center my-5">{`School projects (videos)`}</p>
      <div
        className="grid-cols-custom gap-8 w-full justify-center"
      >
        {projects.schoolProjects.map((proj) => (
          <ContainerProyect
            containerStyle={proj.containerStyle}
            key={proj.name}
            name={proj.name}
            images={proj.images}
            description={proj.description}
            github={proj.gitHub}
            web={proj.web}
            isVideo={proj.isVideo}
          />
        ))}
      </div>
    </>
  );
}

export default SchoolProjects;
