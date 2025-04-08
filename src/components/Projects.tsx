import React, { useState } from "react";
import Section from "./common/Section";
import { Link } from "react-router-dom";
import { Project, projects } from "../assets/projects";

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div />
        <div className="flex items-center justify-end gap-6 my-3">
          <div className="flex items-center gap-2">
            <div className="p-4 bg-blue-50" />
            <span>: 업무</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-4 bg-green-50" />
            <span>: 개인</span>
          </div>
        </div>
        {projects.map((project, index) => {
          const bgColor =
            project.type === "work" ? "bg-blue-50" : "bg-green-50";
          return (
            <Link
              key={index}
              to={`project/${project.link}`}
              className={`${bgColor} p-6 rounded-lg shadow-md hover:shadow-lg transition relative`}
              onMouseEnter={() => setHoveredProject(project)}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-fit h-fit rounded-r-lg opacity-90 my-2"
              />
              <div
                className={`${
                  hoveredProject === project ? "" : "collapse"
                } flex bg-gray-600 absolute top-0 left-0 w-full h-full opacity-50 z-10 rounded-lg justify-center items-end`}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <p className="text-white text-lg mb-3 break-words">
                  {project.skills}
                </p>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
