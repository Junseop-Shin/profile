import React from "react";
import Section from "./common/Section";
import { Link } from "react-router-dom";

type ProjectType = "personal" | "work";

interface Project {
  title: string;
  link: string;
  type: ProjectType;
  image: string;
  skills: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "프로필",
    link: "",
    type: "personal",
    image: "",
    skills: "",
    description: "A web app for task management.",
  },
  {
    title: "BOLD 웹페이지",
    link: "",
    type: "personal",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
  {
    title: "액스",
    link: "",
    type: "work",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
  {
    title: "웹오피스",
    link: "",
    type: "work",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
  {
    title: "오피스",
    link: "",
    type: "work",
    image: "",
    skills: "",
    description: "A portfolio website for designers.",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Projects
      </h2>

      <div className="flex items-center justify-end gap-6 my-3">
        <div className="flex items-center gap-2">
          <div className="p-4 bg-blue-100" />
          <span>: 업무</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-4 bg-green-100" />
          <span>: 개인</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const bgColor =
            project.type === "work" ? "bg-blue-100" : "bg-green-100";
          return (
            <Link
              key={index}
              to={project.link}
              className={`${bgColor} p-6 rounded-lg shadow-md hover:shadow-lg transition`}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
