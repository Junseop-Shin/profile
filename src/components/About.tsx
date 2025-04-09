import React, { useCallback, useState } from "react";
import Section from "./common/Section";
import {
  IoMdDownload,
  IoIosMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import AboutDetail from "./AboutDetail";
import { about } from "../assets/about";
import H2 from "./common/H2";
import P from "./common/P";
import Span from "./common/Span";
import Icon from "./common/Icon";

const AboutSection: React.FC = () => {
  const [isAboutDetailOpen, setIsAboutDetailOpen] = useState(false);

  const openAboutDetail = useCallback(() => {
    setIsAboutDetailOpen(true);
  }, []);

  const closeAboutDetail = useCallback(() => {
    setIsAboutDetailOpen(false);
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // 이력서 파일 경로
    link.download = "신준섭_이력서.pdf"; // 다운로드될 파일 이름
    link.click();
  }, []);

  return (
    <Section id="about">
      <div className="grid grid-cols-2">
        <div className="mx-10 text-left gap-5 flex flex-col justify-center">
          <H2 className="pb-6 border-b-2">About</H2>
          <P>{about.intro}</P>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${about.email}?subject=[문의]`}
              className="flex items-center gap-1 hover-target"
            >
              <Icon iconName={IoIosMail} />
              <Span>{about.email}</Span>
            </a>
            <a
              href={about.linkedin}
              className="flex items-center gap-1 hover-target"
            >
              <Icon iconName={IoLogoLinkedin} />
              <Span>{about.linkedin}</Span>
            </a>
            <a
              href={about.github}
              className="flex items-center gap-1 hover-target"
            >
              <Icon iconName={IoLogoGithub} />
              <Span>{about.github}</Span>
            </a>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={handleDownload}
              className="flex w-fit items-center gap-1 bg-black text-white font-bold hover-target"
            >
              <Icon iconName={IoMdDownload} className="text-white" />
              이력서
            </button>
            <button
              onClick={openAboutDetail}
              className="flex w-fit items-center gap-1 bg-gray-300 font-bold hover-target"
            >
              {isAboutDetailOpen ? (
                <Icon iconName={IoIosArrowBack} className="dark:text-black" />
              ) : (
                <Icon iconName={IoIosArrowForward} />
              )}
              더보기
            </button>
          </div>
        </div>
        <div className="flex relative items-center justify-center">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-fit h-fit rounded-r-lg opacity-50"
          />
          <AboutDetail
            isOpened={isAboutDetailOpen}
            onClose={closeAboutDetail}
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
