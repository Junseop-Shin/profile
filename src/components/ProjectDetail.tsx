import React, { useEffect, useLayoutEffect, useState } from "react";
import Section from "./common/Section";
import { useParams } from "react-router-dom";
import { Project, projects } from "../assets/projects";
import { IoMdAt, IoLogoGithub } from "react-icons/io";
import H2 from "./common/H2";
import Span from "./common/Span";
import Icon from "./common/Icon";
import H3 from "./common/H3";
import H4 from "./common/H4";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.link === projectId);

  const [imageOpacity, setImageOpacity] = useState(1);

  // Scroll event handler
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current scroll position
    const maxScroll = window.innerHeight; // Maximum scroll height (adjust as needed)
    const newOpacity = Math.max(0.3, 1 - scrollTop / maxScroll); // Calculate opacity (minimum 0.5)
    setImageOpacity(newOpacity);
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to the top
  }, []);

  if (!project) {
    return <H2>프로젝트를 찾을 수 없습니다.</H2>;
  }

  const layoutDescription = (desc: string) => {
    const [mainItem, subItemsText] = desc.split(":");
    return (
      <li
        key={mainItem}
        className={`text-lg text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed`}
      >
        {mainItem}
        {subItemsText?.split(".")?.map((text) => (
          <li
            key={text}
            className={`text-sm text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed pl-5`}
          >
            {text}
          </li>
        ))}
      </li>
    );
  };

  const layoutProject = (project: Project) => {
    return (
      <div
        key={project.link}
        className={`flex flex-col w-full min-h-[50dvh] text-left p-6 shadow-lg rounded-lg dark:bg-dark-bg-item transition-colors duration-500`}
      >
        <H3>{`${project.subtitle} (${project.date})`}</H3>
        <H4>{project.skills}</H4>
        <div className="flex flex-col text-left gap-2">
          {project.description?.map((desc) => layoutDescription(desc))}
        </div>
      </div>
    );
  };

  const { subProjects } = project;
  return (
    <Section id="project-detail">
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-contain opacity-90 py-2 sticky top-0 transition-opacity duration-100"
        style={{ opacity: imageOpacity }}
      />
      <div
        className={`w-full h-full flex flex-col items-center p-6 ${
          imageOpacity !== 1
            ? "bg-white dark:bg-dark-bg-default transition-colors duration-500"
            : "bg-none"
        }`}
        style={{
          opacity: 1 - imageOpacity,
        }}
      >
        <H2>{project.title}</H2>
        <div className="flex flex-col gap-3 text-left mb-6">
          {project.web && (
            <a
              href={project.web}
              className="flex items-center gap-1 hover-target"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName={IoMdAt} />
              <Span>{project.web}</Span>
            </a>
          )}
          {project.git && (
            <a
              href={project.git}
              className="flex items-center gap-1 hover-target"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName={IoLogoGithub} />
              <Span>{project.git}</Span>
            </a>
          )}
        </div>
        <div
          className={`${
            subProjects ? "sm:grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          } grid gap-8`}
        >
          {subProjects
            ? subProjects.map((subProject) => layoutProject(subProject))
            : layoutProject(project)}
        </div>
      </div>
    </Section>
  );
};

export default ProjectDetail;
