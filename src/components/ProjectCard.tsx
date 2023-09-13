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
    className="bg-primary rounded-3xl p-4 border-t-4 border-b-8 border-primary-border cursor-pointer h-[400px] flex flex-col"
    onClick={() => selectProject(project)}
  >
    <div className="relative rounded-lg overflow-hidden h-[170px] object-cover">
      <Image
        src={project.image}
        objectFit="cover"
        alt={project.title}
        fill={true}
      />
    </div>

    <h3 className="text-xl font-bold mt-4 truncate">{project.title}</h3>
    <small className="text-gray-500">{project.date}</small>
    <div className="flex flex-wrap gap-1 mt-2 max-h-[90px]">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className="bg-primary-transparency p-2 rounded-xl text-xs truncate"
        >
          {tag}
        </span>
      ))}
    </div>
    <p className="text-sm mt-2 overflow-y-hidden max-h-[70px]">
      {project.description}
    </p>
  </div>
);

export default ProjectCard;
