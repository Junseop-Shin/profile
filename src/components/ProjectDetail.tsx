import React, { useEffect, useLayoutEffect, useState } from "react";
import Section from "./common/Section";
import { useParams } from "react-router-dom";
import { Project, projects } from "../assets/projects";
import { IoMdAt, IoLogoGithub } from "react-icons/io";
import H2 from "./common/H2";
import Icon from "./common/Icon";
import H3 from "./common/H3";
import P from "./common/P";
import LItem from "./common/Litem";

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
      <LItem key={mainItem} type="main">
        {mainItem}
        <ul className="my-1 list-disc">
          {subItemsText?.split(".")?.map((text) => (
            <LItem key={text} type="sub">
              {text}
            </LItem>
          ))}
        </ul>
      </LItem>
    );
  };

  const layoutProject = (project: Project) => {
    return (
      <div
        key={project.subtitle}
        className={`flex flex-col w-full min-h-[50dvh] text-center p-6 shadow-lg rounded-lg dark:bg-dark-bg-item transition-colors duration-500`}
      >
        <H3>{`${project.subtitle}`}</H3>
        <H3>{`(${project.date})`}</H3>
        <P pSize="xl" style={{ opacity: 0.7 }}>
          {project.skills}
        </P>
        <div className="flex flex-col gap-2 mt-10 text-left">
          {project.description?.map((desc) => layoutDescription(desc))}
        </div>
      </div>
    );
  };

  const { subProjects } = project;
  return (
    <Section id="project-detail" style={{ minHeight: "200vh" }}>
      <img
        src={project.image}
        alt={project.title}
        className="fixed inset-0 z-0 object-contain h-[100vh] justify-self-center py-2 transition-opacity duration-100 opacity-90 pointer-events-none"
        style={{ opacity: imageOpacity }}
      />
      <div
        className={`relative z-10 w-full min-h-[80vh] flex flex-col items-center p-6 ${
          imageOpacity !== 1
            ? "bg-white dark:bg-dark-bg-default transition-colors duration-500"
            : "bg-none"
        }`}
        style={{
          opacity: 1 - imageOpacity,
          marginTop: "100vh",
        }}
      >
        <H2>{project.title}</H2>
        <div className="flex flex-col gap-3 mb-6 text-left">
          {project.web && (
            <a
              href={project.web}
              className="flex items-center gap-1 hover-target"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName={IoMdAt} />
              <P pSize="sm">{project.web}</P>
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
              <P pSize="sm">{project.git}</P>
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
