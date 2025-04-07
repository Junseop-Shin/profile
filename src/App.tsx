import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Home />
        <About />
        <Career />
        <Projects />
      </main>
    </>
  );
};

export default App;
