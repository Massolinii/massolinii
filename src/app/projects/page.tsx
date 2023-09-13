"use client";
import { useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "THE_GAME_RENDER",
    date: "July 2023",
    description:
      "My first complete full-stack project. A showcase of AI-generated images to use as a reference during game assets development. The images are generated using Midjourney, and hosted online using Cloudinary.",
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
  {
    id: 2,
    title: "Chiara Lashmaker",
    date: "August 2023",
    description:
      "Personal business-card site for my dear friend and excellent lashmaker and beautician Chiara. Strong mobile incentivized.",
    tags: ["React", "Bootstrap", "react-router-dom"],
    image: "/projects/chiara.jpg",
    video: "",
    github: "https://github.com/Massolinii/chiara_bonanzinga_estetica",
  },
  {
    id: 3,
    title: "Meteo_App",
    date: "April 2023",
    description:
      "A weather forecast app using OpenWeather API. 5 days forecast on all cities in the world.",
    tags: ["React", "Redux", "Bootstrap", "react-router-dom"],
    image: "/projects/weather.png",
    video: "",
    github: "https://github.com/Massolinii/meteo_app",
  },
  {
    id: 4,
    title: "LinkedIn Replica",
    date: "June 2023",
    description:
      "Team project for a Linkedin replica using React. A wonderful opportunity to learn teamwork and discuss code with other people. Thanks Team 3!",
    tags: ["React", "Redux", "Bootstrap", "react-router-dom"],
    image: "/projects/linkedin.jpg",
    video: "",
    github: "https://github.com/Massolinii/linkedin",
  },
  {
    id: 5,
    title: "Netflix Replica",
    date: "April 2023",
    description:
      "A netflix replica, with a gorgeous jumbotron and some carousel effect for the categories. Made using IMDB API.",
    tags: ["React", "Redux", "Bootstrap", "react-router-dom"],
    image: "/projects/netflix.jpg",
    video: "",
    github: "https://github.com/Massolinii/netflix",
  },
  {
    id: 6,
    title: "Epic Energy",
    date: "June 2023",
    description:
      "Fullstack team project for a electricity distribution company. Our first approach to a real-case project. Thanks Team 1!",
    tags: [
      "React",
      "Bootstrap",
      "Java Spring",
      "react-router-dom",
      "PostgreSQL",
    ],
    image: "/projects/energy.png",
    video: "",
    github: "https://github.com/Massolinii/BuildWeek2_backend",
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
    <div className="container mx-auto p-4 flex flex-col">
      <h1 className="mx-auto text-center text-4xl m-5">My Projects</h1>
      <h2 className="mx-auto text-center text-xl m-2 mb-10">
        Some of my latest favorites projects I have worken on, both alone and in
        team.
      </h2>

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
