import React from 'react';
import TypingAnimation from './TypingAnimation';

function AboutMe() {
    return ( <>
    <div className = "Andy">
      <TypingAnimation write = "About Me"/>
    </div>
    <div className = "Experiences">
      <p>
          I am a student at the University of Texas at Austin pursuing a BSA
          in Computer Science with a certificate in Applied Statistical
          Modeling. I have a foundation in Mathematics, Statistics, and
          Object-Oriented Programming. I am proficent in Java and C and
          experienced with HTML, CSS, JavaScript, TypeScript, Python, C++,
          Arm64 Assembly, React, Git and R.
        </p>
    </div>
  </>);
}

export default AboutMe;