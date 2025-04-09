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
              <>
                <Header />
                <Home />
                <About />
                <Career />
                <Projects />
              </>
            }
          />
          <Route
            path="/project/:projectId"
            element={
              <>
                <Header />
                <ProjectDetail />
              </>
            }
          />
        </Routes>
        <Cursor />
      </main>
    </>
  );
};

export default App;
