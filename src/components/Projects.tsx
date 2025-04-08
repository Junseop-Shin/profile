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
    [projects, activeTag]
  );

  const onTagClick = useCallback((type: ProjectType) => {
    setActiveTag(type);
  }, []);

  return (
    <Section id="projects">
      <H2 className="text-center">Projects</H2>

      <div className="flex items-center justify-center gap-4 mb-4">
        {(["all", "personal", "work"] as ProjectType[]).map((type) => (
          <div
            className={`${
              type === activeTag
                ? "border-2 border-solid dark:border-white"
                : "border-none"
            } rounded-3xl cursor-pointer  hover:opacity-50 px-4 py-2`}
            onClick={() => onTagClick(type)}
            key={type}
          >
            <P>{type.charAt(0).toUpperCase() + type.slice(1)}</P>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          return (
            <Link
              key={index}
              to={`project/${project.link}`}
              className={`shadow-md hover:shadow-lg transition relative dark:bg-gray-600`}
              onMouseEnter={() => setHoveredProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-square object-contain opacity-90 my-2"
              />
              <div
                className={`${
                  hoveredProject === project ? "" : "collapse"
                } flex flex-col bg-gray-600 dark:bg-gray-400 absolute top-0 left-0 w-full h-full opacity-50 z-10 rounded-lg justify-end items-start p-4 gap-3 text-left`}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <p className="text-white dark:text-gray-800 text-lg font-semibold">
                  {project.title}
                </p>
                <p className="text-white dark:text-gray-800 text-sm">
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
