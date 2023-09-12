"use client";
import { useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "THE_GAME_RENDER",
    date: "June 2023",
    description:
      "A showcase of AI-generated images to use as a reference during game assets development",
    tags: [
      "React",
      "Bootstrap",
      "Java Spring",
      "react-router-dom",

      "PostgreSQL",
    ],
    image: "/projects/the_game_render.jpeg",
    video: "https://www.youtube.com/watch?v=mepUdTLyuxc",
    github: "https://github.com/Massolinii/theGameRender",
  },
];

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  video: string;
  github: string;
};

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            selectProject={setSelectedProject}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          deselectProject={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
