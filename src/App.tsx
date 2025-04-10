import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import PageAnimation from "./components/common/PageAnimation";
import Skill from "./components/Skill";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <PageAnimation id={location.pathname}>
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <div className="dark:bg-dark-bg-default">
                <Header />
                <Home />
                <About />
                <Career />
                <Skill />
                <Projects />
              </div>
            }
          />
          <Route
            path="/project/:projectId"
            element={
              <div className="dark:bg-dark-bg-default">
                <Header />
                <ProjectDetail />
              </div>
            }
          />
        </Routes>
        <Cursor />
      </main>
    </PageAnimation>
  );
};

export default App;
