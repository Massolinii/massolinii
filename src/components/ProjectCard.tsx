import React from "react";
import Image from "next/image";
import { Project } from "../app/projects/page";

type ProjectCardProps = {
  project: Project;
  selectProject: (project: Project) => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  selectProject,
}) => (
  <div
    className="bg-primary rounded-lg p-4 border-2 border-primary-border cursor-pointer"
    onClick={() => selectProject(project)}
  >
    <div className="rounded-lg overflow-hidden">
      <Image
        src={project.image}
        objectFit="cover"
        alt={project.title}
        height={1000}
        width={1000}
      />
    </div>
    <div className="flex flex-wrap gap-2 mt-2 ">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="bg-primary-transparency p-2 rounded-xl text-xs "
        >
          {tag}
        </span>
      ))}
    </div>
    <h3 className="text-xl font-bold mt-4">{project.title}</h3>
    <small className="text-gray-500">{project.date}</small>
    <p className="text-sm mt-2">{project.description}</p>
  </div>
);

export default ProjectCard;
