import React from "react";
import Section from "./common/Section";

const HomeSection: React.FC = () => {
  return (
    <Section id="home">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        안녕하세요, 입니다
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        프론트엔드 웹 개발자
      </p>
    </Section>
  );
};

export default HomeSection;
