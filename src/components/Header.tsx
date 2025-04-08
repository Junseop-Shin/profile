import React, { useCallback } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { sectionIds } from "../assets/header";

const Header: React.FC = () => {
  const { isLightMode, toggleTheme, currentSection } = useGlobalContext();

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full flex flex-row px-12 py-12 justify-between items-center p-16 bg-transparent text-gray-500">
      <div className="flex flex-row">
        {isLightMode ? (
          <IoMdMoon
            className="opacity-30 hover:opacity-80 size-8 cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <IoMdSunny
            className="opacity-30 hover:opacity-80 size-8 cursor-pointer"
            onClick={toggleTheme}
          />
        )}
      </div>
      <div className="flex flex-row gap-8">
        <nav className="w-full">
          <ul className="flex flex-column space-x-6 justify-center items-center gap-6">
            {sectionIds.map((id) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`${
                  currentSection === id
                    ? "after:bg-gray-500"
                    : "after-bg-transparent"
                } after:content-[''] after:block after:w-full after:h-[2px] text-lg font-bold cursor-pointer  opacity-40 hover:opacity-80 transition`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
