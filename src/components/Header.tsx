import React from "react";
import { GiLighthouse } from "react-icons/gi";
import {
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdOutlineClose,
} from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { useGlobal } from "../utils/GlobalContext";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const { isLightMode, toggleTheme, isMenuOpened, toggleMenu } = useGlobal();

  return (
    <header className="sticky top-0 flex flex-row px-16 py-16 justify-between items-center p-16 bg-transparent text-gray-500">
      <div className="flex flex-row">
        <Link to="/" onClick={toggleMenu}>
          <GiLighthouse className="hover:opacity-0.5 size-8" />
        </Link>
      </div>
      <div className="flex flex-row gap-8">
        {isLightMode ? (
          <MdOutlineNightlight
            className="hover:opacity-0.5 size-8"
            onClick={toggleTheme}
          />
        ) : (
          <MdOutlineLightMode
            className="hover:opacity-0.5 size-8"
            onClick={toggleTheme}
          />
        )}
        {isMenuOpened ? (
          <MdOutlineClose
            className="hover:opacity-0.5 size-8"
            onClick={toggleMenu}
          />
        ) : (
          <TbGridDots
            className="hover:opacity-0.5 size-8"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
