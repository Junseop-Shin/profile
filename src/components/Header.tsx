import React, { useCallback } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useGlobal } from "../utils/GlobalContext";

const Header: React.FC = () => {
  const { isLightMode, toggleTheme } = useGlobal();

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
          <MdOutlineNightlight
            className="opacity-30 hover:opacity-80 size-8 cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <MdOutlineLightMode
            className="opacity-30 hover:opacity-80 size-8 cursor-pointer"
            onClick={toggleTheme}
          />
        )}
      </div>
      <div className="flex flex-row gap-8">
        <nav className="w-full">
          <ul className="flex flex-column space-x-6 justify-center items-center gap-6">
            <li
              onClick={() => scrollToSection("home")}
              className="opacity-40 hover:opacity-80 transition"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="opacity-40 hover:opacity-80 transition"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("career")}
              className="opacity-40 hover:opacity-80 transition"
            >
              Career
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="opacity-40 hover:opacity-80 transition"
            >
              Projects
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
