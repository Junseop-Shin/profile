import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import { Route, Routes } from "react-router-dom";
import Cursor from "./components/Cursor";

const App: React.FC = () => {
  return (
    <>
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <div className="dark:bg-dark-bg-default">
                <Header />
                <Home />
                <About />
                <Career />
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
    </>
  );
};

export default App;
