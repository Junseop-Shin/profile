import React from "react";
import MountUnmountAnimation from "./common/MountUnmoundAnimation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

interface AboutDetailProps {
  isOpened: boolean;
  onClose: () => void;
}

const AboutDetail: React.FC<AboutDetailProps> = ({ isOpened, onClose }) => {
  return (
    <MountUnmountAnimation isVisible={isOpened}>
      <div className="fixed top-0 right-0 w-full h-full bg-black opacity-20 z-20" />
      <motion.div
        className="fixed top-0 right-0 w-[50%] h-full z-30"
        initial={{ x: 100, opacity: 1 }}
        animate={{ x: 0 }}
        exit={{ x: 100, opacity: 1 }}
        transition={{ type: "spring", damping: 20, duration: 0.5 }}
      >
        <button
          className="absolute top-0 left-[-45px] bg-none text-white"
          onClick={onClose}
        >
          <IoMdClose className="w-5 h-5" />
        </button>
        <div className="flex flex-col w-full h-full bg-white rounded-lg shadow-lg p-4 items-center justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Journey as a Developer
          </h2>
        </div>
      </motion.div>
    </MountUnmountAnimation>
  );
};

export default AboutDetail;
