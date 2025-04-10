import React, { useEffect, useRef } from "react";
import MountUnmountAnimation from "./common/MountUnmoundAnimation";
import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "../hooks/useGlobalContext";
import H2 from "./common/H2";
import Icon from "./common/Icon";
import P from "./common/P";
import { about } from "../assets/about";
import { useCursorTarget } from "../hooks/useCursorTarget";

interface AboutDetailProps {
  isOpened: boolean;
  onClose: () => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ isOpened, onClose }) => {
  const { currentSection } = useGlobalContext();
  const drawerRef = useRef<HTMLDivElement | null>(null);
  useCursorTarget(drawerRef, isOpened); // 드로어 열릴 때만 바인딩

  useEffect(() => {
    const handleScroll = () => {
      if (currentSection !== "about") {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, onClose]);

  return (
    <MountUnmountAnimation isVisible={isOpened}>
      <div
        className="fixed top-0 right-0 w-full h-full
       bg-black opacity-20 dark:bg-white transition-colors duration-500 z-40"
      />
      <motion.div
        className="fixed top-0 right-0 w-[50%] h-full z-50"
        initial={{ x: 100, opacity: 1 }}
        animate={{ x: 0 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ type: "spring", damping: 20, duration: 0.5 }}
        ref={drawerRef}
      >
        <button
          className="absolute top-0 left-[-45px] bg-none hover-target"
          onClick={onClose}
        >
          <Icon iconName={IoMdClose} className="text-white" />
        </button>
        <div
          className={`flex flex-col text-left w-full h-full bg-white dark:bg-dark-bg-addition transition-colors duration-500
         rounded-lg shadow-lg p-10 overflow-auto`}
        >
          <H2 className="pb-6 border-b-2">Journey as a Developer</H2>
          <div className="break-keep mb-3">
            {about.detail.map((int) => (
              <P>{int}</P>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {about.pros.map((pro) => (
              <li
                key={pro}
                className={`text-sm text-gray-700 dark:text-dark-text-default transition-colors duration-500 leading-relaxed`}
              >
                {pro}
              </li>
            ))}
          </div>
        </div>
      </motion.div>
    </MountUnmountAnimation>
  );
};

export default AboutDetail;
