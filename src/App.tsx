import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { useGlobal } from "./utils/GlobalContext";
import HeaderMenu from "./components/HeaderMenu";
import MountUnmountAnimation from "./components/common/MountUnmoundAnimation";

const App: React.FC = () => {
  const { isMenuOpened } = useGlobal();

  return (
    <>
      <Header />
      <main>
        {isMenuOpened ? (
          <MountUnmountAnimation className="w-full" isVisible={isMenuOpened}>
            <HeaderMenu />
          </MountUnmountAnimation>
        ) : (
          <MountUnmountAnimation className="w-full" isVisible={!isMenuOpened}>
            <About />
            <Timeline />
            <Works />
            <Contact />
          </MountUnmountAnimation>
        )}
      </main>
    </>
  );
};

export default App;
