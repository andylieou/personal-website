import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import TypingAnimation from "./components/TypingAnimation";

function App() {
  const [activeTab, setActiveTab] = useState("AboutMe");
  const scrollRef = useRef<HTMLDivElement>(null); // Specify the type here

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    // Check if it's not the initial render
    if (scrollRef.current && activeTab !== "AboutMe") {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeTab]);
  
  return (
    <>
      <div className="Top">
        <TypingAnimation write="Hi, I'm Andy Lieou." />
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
      <div ref={scrollRef}>
        {activeTab === "AboutMe" && <AboutMe />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Experiences" && <Experiences />}
      </div>
      <ContactMe />
    </>
  );
}

export default App;
