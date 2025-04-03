import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useGlobal } from "./utils/GlobalContext";
import HeaderMenu from "./components/HeaderMenu";
import MountUnmountAnimation from "./components/common/MountUnmoundAnimation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App: React.FC = () => {
  const { isMenuOpened } = useGlobal();

  return (
    <>
      <Header />
      <main>
        <MountUnmountAnimation className="w-full" isVisible={isMenuOpened}>
          <HeaderMenu />
        </MountUnmountAnimation>
        <MountUnmountAnimation className="w-full" isVisible={!isMenuOpened}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MountUnmountAnimation>
      </main>
    </>
  );
};

export default App;
