import React, { useCallback } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { sectionIds } from "../assets/header";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "./common/Icon";

const Header: React.FC = () => {
  const { isLightMode, toggleTheme, currentSection } = useGlobalContext();
  const { projectId } = useParams<{ projectId: string }>();
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
    <header className="fixed top-0 left-0 w-full flex flex-row px-12 py-12 justify-between items-center p-16 bg-transparent z-30 text-gray-500 dark:text-white">
      <div className="flex flex-row">
        <Icon
          iconName={isLightMode ? IoMdMoon : IoMdSunny}
          className="opacity-30 hover:opacity-80 size-8 hover-target cursor-pointer"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-row gap-8">
        <nav className="w-full">
          <ul className="flex flex-column space-x-6 justify-center items-center md:gap-6 sm:gap-2">
            {sectionIds.map((sectionId) => (
              <li
                key={sectionId}
                onClick={() => handleLinkClick(sectionId)}
                className={`${
                  currentSection === sectionId
                    ? "after:bg-gray-500 dark:after:bg-white"
                    : "after-bg-transparent"
                } after:content-[''] after:block after:w-full after:h-[2px] text-lg font-bold opacity-30 hover:opacity-80 cursor-pointer transition hover-target`}
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
