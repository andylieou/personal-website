import React from "react";
import TypingAnimation from "./TypingAnimation";

function Experiences() {
  return (
    <>
      <div className="Header">
        <TypingAnimation write="Experiences" />
      </div>
      <div className="Experiences">
        <h3>Tech Consultant</h3>
        <p>Target : Austin, Texas : Apr 2023 - Present</p>
        <p>
          Assisted guests by providing information on the latest technology,
          setting up phones, and solving electronic-related issues. Learned
          communication skills, time management, and customer service.
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
