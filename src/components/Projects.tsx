import React, { useCallback, useMemo, useState } from "react";
import Section from "./common/Section";
import { Link } from "react-router-dom";
import { Project, projects, ProjectType } from "../assets/projects";
import H2 from "./common/H2";
import P from "./common/P";

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [activeTag, setActiveTag] = useState<ProjectType>("all");

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => project.type === activeTag || activeTag === "all"
      ),
    [activeTag]
  );

  const onTagClick = useCallback((type: ProjectType) => {
    setActiveTag(type);
  }, []);

  return (
    <Section id="projects">
      <H2>Projects</H2>

      <div className="flex items-center justify-center gap-4 mb-4">
        {(["all", "personal", "work"] as ProjectType[]).map((type) => (
          <div
            className={`${
              type === activeTag
                ? "border-2 border-solid dark:border-white transition-colors duration-500"
                : "border-none"
            } rounded-3xl hover:opacity-50 px-4 py-2 cursor-pointer hover-target`}
            onClick={() => onTagClick(type)}
            key={type}
          >
            <P>{type.charAt(0).toUpperCase() + type.slice(1)}</P>
          </div>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => {
          return (
            <Link
              key={index}
              to={`project/${project.link}`}
              className={`shadow-md hover:shadow-lg relative dark:bg-dark-bg-item transition-colors duration-500 hover-target`}
              onMouseEnter={() => setHoveredProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-contain w-full my-2 aspect-square opacity-90"
              />
              <div
                className={`${
                  hoveredProject === project ? "" : "collapse"
                } flex flex-col bg-gray-600 dark:bg-dark-bg-item transition-colors duration-500
                  absolute top-0 left-0 w-full h-full opacity-50 z-10 rounded-lg justify-end items-start p-4 gap-3 text-left`}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <p className="text-lg font-semibold text-white transition-colors duration-500 dark:text-gray-800">
                  {project.title}
                </p>
                <p className="text-sm text-white transition-colors duration-500 dark:text-gray-800">
                  {project.skills}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default ProjectsSection;
