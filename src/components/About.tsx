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
    link.href = about.resume; // 이력서 파일 경로
    link.download = "신준섭_이력서.pdf"; // 다운로드될 파일 이름
    link.click();
  }, []);

  return (
    <Section id="about">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center order-2 gap-5 mx-10 text-left md:order-1">
          <H2 className="pb-6 border-b-2" style={{ margin: 0 }}>
            About
          </H2>
          <div className="break-keep">
            {about.intro.map((int) => (
              <P>{int}</P>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${about.email}?subject=[문의]`}
              className="flex items-center gap-1 hover-target"
            >
              <Icon iconName={IoIosMail} />
              <P pSize="sm">{about.email}</P>
            </a>
            <a
              href={about.linkedin}
              className="flex items-center gap-1 hover-target"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName={IoLogoLinkedin} />
              <P pSize="sm">{about.linkedin}</P>
            </a>
            <a
              href={about.github}
              className="flex items-center gap-1 hover-target"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon iconName={IoLogoGithub} />
              <P pSize="sm">{about.github}</P>
            </a>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1 font-bold text-white bg-black w-fit hover-target"
            >
              <Icon iconName={IoMdDownload} className="text-white" />
              이력서
            </button>
            <button
              onClick={openAboutDetail}
              className="flex items-center gap-1 font-bold bg-gray-300 w-fit hover-target"
            >
              {isAboutDetailOpen ? (
                <IoIosArrowBack className="flex-shrink-0 text-black transition-colors duration-500 size-6" />
              ) : (
                <IoIosArrowForward className="flex-shrink-0 text-black transition-colors duration-500 size-6" />
              )}
              더보기
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center order-1 md-order-2">
          <img
            src="/about.png"
            alt="Profile"
            className="p-8 w-fit h-fit opacity-70"
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
