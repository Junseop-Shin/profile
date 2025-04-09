import React from "react";
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

  if (!project) {
    return <H2>프로젝트를 찾을 수 없습니다.</H2>;
  }

  const layoutDescription = (desc: string) => {
    const [mainItem, subItemsText] = desc.split(":");
    return (
      <li
        key={mainItem}
        className="text-lg text-gray-700 dark:text-white leading-relaxed"
      >
        {mainItem}
        {subItemsText?.split(".")?.map((text) => (
          <li
            key={text}
            className="text-sm text-gray-700 dark:text-white leading-relaxed pl-5"
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
        className="flex flex-col w-full min-h-[50dvh] text-left p-6 shadow-lg rounded-lg"
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {subProjects
          ? subProjects.map((subProject) => layoutProject(subProject))
          : layoutProject(project)}
      </div>
    </Section>
  );
};

export default ProjectDetail;
