import React from "react";

const HeaderMenu: React.FC = () => {
  return (
    <section id="menu" className="w-full">
      <nav>
        <ul className="flex flex-column space-x-6 justify-center items-center gap-6">
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#timeline" className="hover:text-blue-400 transition">
              Timeline
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-blue-400 transition">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default HeaderMenu;
