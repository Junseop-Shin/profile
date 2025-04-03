import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../utils/GlobalContext";

const HeaderMenu: React.FC = () => {
  const { toggleMenu } = useGlobal();
  return (
    <section id="menu" className="w-full">
      <nav>
        <ul className="flex flex-column space-x-6 justify-center items-center gap-6">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/timeline"
              onClick={toggleMenu}
              className="hover:text-blue-400 transition"
            >
              Timeline
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              onClick={toggleMenu}
              className="hover:text-blue-400 transition"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default HeaderMenu;
