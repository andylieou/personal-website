import React from "react";
import { TypingAnimation } from "../../Shared";
import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <TypingAnimation
                    write="Hi! I'm Andy Lieou"
                    fontSize={50}
                />
            </div>
        </>
    );
};

export default HomePage;
