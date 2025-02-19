import React, { useEffect, useRef } from "react";
import TypingAnimation from "./TypingAnimation";

function Experiences() {

  const firstDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the beginning of the first div with class name "Experiences" when component mounts
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="Header">
        <TypingAnimation write="Experiences" />
      </div>
      <div className="Experiences"> 
        <h3>Relevant Coursework</h3>
        <p> 
          Principles of Computer Systems (OS),
          Computer Organization and Architecture,
          Object-Oriented Programming,
          Discrete Mathematics,
          Data Structures, 
          Introduction to Programming
        </p>
        <p>
          Elements of Regression Analysis,
          Introduction to Probability and Statistics,
          Elements of Statistics
        </p>
      </div>
      <div className="Experiences">
        <h1> Work Experiences </h1>
        <h3>Software Development Intern</h3>
        <p>Expedia Group : Seattle, Washington : June 2024 - Aug 2024</p>
        <p>
          Led the end-to-end migration of VRBO's booking request flow from a legacy
          platform to a modern architecture, utilizing REST APIs, TypeScript, React, 
          and GraphQL. Spearheaded the development and integration of user 
          interfaces and optimized data retrieval systems, enhancing booking 
          functionality and system performance through comprehensive full-stack 
          development, including a complete backend redesign and frontend upgrade.
        </p>
        <h3>Undergraduate Course Assistant</h3>
        <p>
          University of Texas at Austin : Austin, Texas : Aug 2023 - Present
        </p>
        <p>
          Conducted accessible office hours, offering personalized assistance 
          to Computer Architecture students with coding assignments, fostering a 
          collaborative learning environment. Actively participated in lectures and 
          led weekly discussions, addressing coding-related questions and 
          contributing to the overall learning experience. Delivered constructive 
          feedback on coding assignments and exams, emphasizing effective communication.
        </p>
        <h3>Undergraduate Course Assistant</h3>
        <p>
          University of Texas at Austin : Austin, Texas : Jan 2023 - May 2023
        </p>
        <p>
          Taught students basic mathematics and logic by hosting office hours,
          providing feedback on homework and exams, and helping with problems
          during lecture. Learned how to work with people of different
          backgrounds, provide assistance to my peers, and organizational
          skills.
        </p>
        <h3>Lead Swim Teacher</h3>
        <p>Emler Swim School : Cedar Park, Texas : May 2022 - Aug 2023</p>
        <p>
          Worked in a fast-paced environment teaching a diverse range of
          students in back-to-back 30 minute lessons. Learned effective time
          management, communication skills, and how to work under pressure.
        </p>
      </div>
    </>
  );
}

export default Experiences;
