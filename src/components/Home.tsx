import React from "react";
import Section from "./common/Section";
import H2 from "./common/H2";
import P from "./common/P";

const HomeSection: React.FC = () => {
  return (
    <Section id="home">
      <H2>안녕하세요, 입니다</H2>
      <P>프론트엔드 웹 개발자</P>
    </Section>
  );
};

export default HomeSection;
