import React from "react";
import Section from "./common/Section";
import { useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <Section id="project-detail">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        프로젝트{projectId}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">디테일</p>
    </Section>
  );
};

export default ProjectDetail;
