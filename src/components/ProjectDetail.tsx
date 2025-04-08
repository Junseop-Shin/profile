import React from "react";
import Section from "./common/Section";
import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";
import { IoMdAt, IoLogoGithub } from "react-icons/io";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.link === projectId);

  if (!project) {
    return (
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        프로젝트를 찾을 수 없습니다.
      </h2>
    );
  }

  const { subProjects } = project;
  return (
    <Section id="project-detail">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{project.title}</h2>
      {subProjects?.map((subProject) => (
        <div
          key={subProject.link}
          className="flex flex-col justify-start items-center p-4 shadow-lg rounded-lg"
        >
          <h3 className="text-3xl font-bold mb-3 text-gray-800">
            {subProject.title}
          </h3>
          <h4 className="text-xl font-semibold mb-3 opacity-50">{`${subProject.subtitle} (${subProject.date})`}</h4>
          <h4 className="text-xl font-semibold mb-6 opacity-50">
            {subProject.skills}
          </h4>
          <div className="flex flex-col items-center gap-2 mb-3">
            {subProject.description?.map((desc, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                {desc}
              </li>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a href={subProject.link} className="flex items-center gap-1">
              <IoMdAt className="w-6 h-6 flex-shrink-0" />
              <span className="truncate">{subProject.link}</span>
            </a>
            <a href={subProject.git} className="flex items-center gap-1">
              <IoLogoGithub className="w-6 h-6" />
              {subProject.git}
            </a>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ProjectDetail;
