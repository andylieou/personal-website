import React, { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import TypingAnimation from "./components/TypingAnimation";

function App() {
  const [activeTab, setActiveTab] = useState("AboutMe");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="Top">
        <TypingAnimation />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => handleTabClick("AboutMe")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick("Projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleTabClick("Experiences")}>
              Experiences
            </a>
          </li>
        </ul>
      </nav>
      {activeTab === "AboutMe" && <AboutMe />}
      {activeTab === "Projects" && <Projects />}
      {activeTab === "Experiences" && <Experiences />}
    </>
  );
}

export default App;
