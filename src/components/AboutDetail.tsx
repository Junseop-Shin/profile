import React, { useEffect } from "react";
import MountUnmountAnimation from "./common/MountUnmoundAnimation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "../hooks/useGlobalContext";
import H2 from "./common/H2";
import Icon from "./common/Icon";

interface AboutDetailProps {
  isOpened: boolean;
  onClose: () => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ isOpened, onClose }) => {
  const { currentSection } = useGlobalContext();
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
      <div className="fixed top-0 right-0 w-full h-full bg-black opacity-20 dark:bg-white z-40" />
      <motion.div
        className="fixed top-0 right-0 w-[50%] h-full z-50"
        initial={{ x: 100, opacity: 1 }}
        animate={{ x: 0 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ type: "spring", damping: 20, duration: 0.5 }}
      >
        <button
          className="absolute top-0 left-[-45px] bg-none hover-target"
          onClick={onClose}
        >
          <Icon iconName={IoMdClose} className="text-white" />
        </button>
        <div className="flex flex-col w-full h-full bg-white dark:bg-gray-500 rounded-lg shadow-lg p-4 items-center justify-center">
          <H2>Journey as a Developer</H2>
        </div>
      </motion.div>
    </MountUnmountAnimation>
  );
};

export default AboutDetail;
