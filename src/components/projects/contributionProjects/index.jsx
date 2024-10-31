import React from "react";
import ContainerProyect from "../../containerProyect";
import { projects } from "../../../api/projects";

function ContributionProjects() {
  return (
    <>
      <p className="font-general text-[40px] text-center my-5">
        Contribution in projects
      </p>
      <div
        className="grid-cols-custom gap-8"
      >
        {projects.contributionProjects.map((proj) => (
          <ContainerProyect
            key={proj.name}
            containerStyle={proj.containerStyle}
            visits={proj.visits}
            mobile={proj.mobile}
            name={proj.name}
            images={proj.images}
            description={proj.description}
            github={proj.gitHub}
            web={proj.web}
          />
        ))}
      </div>
    </>
  );
}

export default ContributionProjects;
