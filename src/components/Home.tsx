import React from "react";
import Section from "./common/Section";
import H2 from "./common/H2";

const HomeSection: React.FC = () => {
  return (
    <Section id="home">
      <H2>안녕하세요, 입니다</H2>
      <p className="text-lg text-gray-700 dark:text-white leading-relaxed">
        프론트엔드 웹 개발자
      </p>
    </Section>
  );
};

export default HomeSection;
