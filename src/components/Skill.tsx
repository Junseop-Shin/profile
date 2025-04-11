import React from "react";
import Section from "./common/Section";
import H2 from "./common/H2";
import H3 from "./common/H3";
import { skillset } from "../assets/skill";
import LItem from "./common/Litem";
import { HiCheckCircle } from "react-icons/hi";

const SkillSection: React.FC = () => {
  return (
    <Section id="skill">
      <H2 className="w-[80%] pb-6 border-b-2 text-left">Skill</H2>
      <div className="flex flex-col gap-3 text-left w-[70%]">
        {[
          { label: "Strong", skills: skillset.strong },
          { label: "Familiar", skills: skillset.familiar },
          { label: "Experienced", skills: skillset.experienced },
        ].map(({ label, skills }) => (
          <div
            key={label}
            className="p-5 transition-all shadow-md rounded-2xl max-w-[800px] dark:bg-dark-bg-item bg-gray-50 dark:border dark:border-dark-border hover-target"
          >
            <H3 className="mb-4 ml-[10%] text-left">{label}</H3>
            <ul className="space-y-2 text-left list-disc list-inside">
              {skills.map((skill, i) => (
                <LItem
                  type="main"
                  key={`${label}-${i}`}
                  style={{
                    display: "flex",
                    gap: "10px",
                    listStyle: "none",
                    alignItems: "center",
                  }}
                >
                  <HiCheckCircle className="flex-shrink-0 mt-1 text-green-500 size-5" />
                  {skill}
                </LItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillSection;
