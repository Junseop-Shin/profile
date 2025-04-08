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
          <h2 className="text-3xl font-bold pb-6 text-gray-800 border-b-2">
            About
          </h2>
          <p className="text-lg text-ellipsis text-gray-700 leading-relaxed">
            {about.intro}
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${about.email}?subject=[문의]`}
              className="flex items-center gap-1"
            >
              <IoIosMail className="w-6 h-6" />
              {about.email}
            </a>
            <a href={about.linkedin} className="flex items-center gap-1">
              <IoLogoLinkedin className="w-6 h-6 flex-shrink-0" />
              <span className="truncate">{about.linkedin}</span>
            </a>
            <a href={about.github} className="flex items-center gap-1">
              <IoLogoGithub className="w-6 h-6" />
              {about.github}
            </a>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={handleDownload}
              className="flex w-fit items-center gap-1 bg-black text-white font-bold"
            >
              <IoMdDownload />
              이력서
            </button>
            <button
              onClick={openAboutDetail}
              className="flex w-fit items-center gap-1 bg-gray-300  font-bold"
            >
              {isAboutDetailOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
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
