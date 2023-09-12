import React from "react";
import { Project } from "../app/projects/page";
import Image from "next/image";

type ProjectModalProps = {
  project: Project;
  deselectProject: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  deselectProject,
}) => (
  <div
    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    onClick={deselectProject}
  >
    <div
      className="modal bg-white p-4 rounded-lg w-11/12 md:max-w-xl m-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full">
        {" "}
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover"
          height={400}
          width={700}
        />
      </div>
      <h3 className="text-2xl mt-2">{project.title}</h3>
      <small className="text-gray-500">{project.date}</small>
      <p className="text-sm mt-2">{project.description}</p>
      <div className="flex gap-2 mt-4">
        <a
          className="bg-blue-500 text-white py-2 px-4 rounded"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="bg-red-500 text-white py-2 px-4 rounded"
          href={project.video}
          target="_blank"
          rel="noopener noreferrer"
        >
          Video
        </a>
      </div>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={deselectProject}
      >
        X
      </button>
    </div>
  </div>
);

export default ProjectModal;
