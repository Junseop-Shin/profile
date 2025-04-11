import React from "react";
import Section from "./common/Section";
import H2 from "./common/H2";
import H3 from "./common/H3";
import { skillset } from "../assets/skill";
import LItem from "./common/Litem";

const SkillSection: React.FC = () => {
  return (
    <Section id="skill">
      <H2 className="w-[80%] pb-6 border-b-2 text-left">Skill</H2>
      <div className="flex flex-col gap-3 text-left w-[70%]">
        <H3 className="mt-3">Strong</H3>
        <ul className="text-left list-disc">
          {skillset.strong.map((skill) => (
            <LItem type="main">{skill}</LItem>
          ))}
        </ul>
        <H3 className="mt-3">Familiar</H3>
        <ul className="text-left list-disc">
          {skillset.familiar.map((skill) => (
            <LItem type="main">{skill}</LItem>
          ))}
        </ul>
        <H3 className="mt-3">Experienced</H3>
        <ul className="text-left list-disc">
          {skillset.experienced.map((skill) => (
            <LItem type="main">{skill}</LItem>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default SkillSection;
