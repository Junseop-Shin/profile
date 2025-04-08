import React from "react";
import Section from "./common/Section";
import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";
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

  const { subProjects } = project;
  return (
    <Section id="project-detail">
      <H2>{project.title}</H2>
      {subProjects?.map((subProject) => (
        <div
          key={subProject.link}
          className="flex flex-col justify-start items-center p-4 shadow-lg rounded-lg"
        >
          <H3>{subProject.title}</H3>
          <H4>{`${subProject.subtitle} (${subProject.date})`}</H4>
          <H4>{subProject.skills}</H4>
          <div className="flex flex-col items-center gap-2 mb-3">
            {subProject.description?.map((desc, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-white leading-relaxed"
              >
                {desc}
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a href={subProject.link} className="flex items-center gap-1">
              <Icon iconName={IoMdAt} />
              <Span>{subProject.link}</Span>
            </a>
            <a href={subProject.git} className="flex items-center gap-1">
              <Icon iconName={IoLogoGithub} />
              <Span>{subProject.git}</Span>
            </a>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ProjectDetail;
