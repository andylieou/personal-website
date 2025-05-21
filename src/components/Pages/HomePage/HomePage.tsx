import React from "react";
import { TypingAnimation } from "../../Elements";
import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <TypingAnimation write="Hi! I'm Andy Lieou" />
            </div>
        </>
    );
};

export default HomePage;
