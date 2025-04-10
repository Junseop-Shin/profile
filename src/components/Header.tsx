import React, { useCallback } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { sectionIds } from "../assets/header";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "./common/Icon";
import useScrollingStyle from "../hooks/useScrollingStyle";
import { useHomeContext } from "../hooks/useHomeContext";

const Header: React.FC = () => {
  const { isLightMode, toggleTheme } = useGlobalContext();
  const { currentSection } = useHomeContext();
  const { projectId } = useParams<{ projectId: string }>();
  useScrollingStyle();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleLinkClick = useCallback(
    (sectionId: string) => {
      if (projectId != null) {
        navigate("/", { replace: true });

        // URL 변경 후 스크롤 처리
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500);
      }
      scrollToSection(sectionId);
    },
    [navigate, scrollToSection, projectId]
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center
     bg-transparent z-30 text-gray-500 dark:text-dark-text-addition transition-all duration-500 p-9 md:p-12`}
    >
      <div className="flex flex-row">
        <Icon
          iconName={isLightMode ? IoMdMoon : IoMdSunny}
          className="opacity-50 hover:opacity-80 size-8 hover-target cursor-pointer stopped scrolling:opacity-30"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-row gap-8">
        <nav className="w-full">
          <ul className="flex flex-column space-x-6 justify-center items-center md:gap-6 sm:gap-0.5">
            {sectionIds.map((sectionId) => (
              <li
                key={sectionId}
                onClick={() => handleLinkClick(sectionId)}
                className={`${
                  currentSection === sectionId
                    ? "after:bg-gray-500 dark:after:bg-dark-text-addition"
                    : "after-bg-transparent"
                } after:content-[''] after:block after:w-full after:h-[2px] text-lg font-bold
                 opacity-50 hover:opacity-80 stopped scrolling:opacity-30 cursor-pointer transition-all hover-target`}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
