import React from "react";
import Section from "./common/Section";
import H2 from "./common/H2";
import H3 from "./common/H3";
import { skillset } from "../assets/skill";

const SkillSection: React.FC = () => {
  return (
    <Section id="skill">
      <H2 className="w-[80%] pb-6 border-b-2 text-left">Skill</H2>
      <div className="flex flex-col gap-3 text-left w-[70%]">
        <H3 className="mt-3">Strong</H3>
        <ul className="list-disc text-left">
          {skillset.strong.map((skill) => (
            <li className="text-sm text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed ml-7">
              {skill}
            </li>
          ))}
        </ul>
        <H3 className="mt-3">Familiar</H3>
        <ul className="list-disc text-left">
          {skillset.familiar.map((skill) => (
            <li className="text-sm text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed ml-7">
              {skill}
            </li>
          ))}
        </ul>
        <H3 className="mt-3">Experienced</H3>
        <ul className="list-disc text-left">
          {skillset.experienced.map((skill) => (
            <li className="text-sm text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed ml-7">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default SkillSection;
