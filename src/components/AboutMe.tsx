import React from 'react';
import TypingAnimation from './TypingAnimation';

function AboutMe() {
    return ( <>
    <div className = "Andy">
      <TypingAnimation write = "About Me"/>
    </div>
    <div className = "Experiences">
      <p>
        I am a student at the University of Texas at Austin pursuing a BSA in Computer Science 
        and a certificate in Applied Statistical Modeling. 
      </p>
      <p>
        I have a strong foundation in Mathematics, Statistics, and Object-Oriented Programming. 
        I am proficient in Java, C, C++, and R. I am experienced with HTML, CSS, JavaScript, TypeScript,
        Python, Arm64 Assembly, x86 Assembly, React, and Git. 
      </p>
    </div>
  </>);
}

export default AboutMe;