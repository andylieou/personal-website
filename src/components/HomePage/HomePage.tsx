import React from "react";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div style =  {{height: "100px"}}/>
        <TypingAnimation write="Hi! I'm Andy Lieou" />
        <div style =  {{height: "20px"}}/>
      </div>
    </>
  );
};

export default HomePage;
