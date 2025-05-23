import React from "react";
import ConnectIcon from "./ConnectIcon";

const Connect = () => {
    return (
        <>
            <div className="connect-page">
                
                    <ConnectIcon
                        image="/linkedin.png"
                        link="https://www.linkedin.com/in/andy-lieou-165a85268"
                    />
                    <ConnectIcon
                        image="/github.png"
                        link="https://github.com/andylieou"
                    />
                    <ConnectIcon
                        image="/gitlab.svg"
                        link="https://gitlab.com/andylieou"
                    />
                    <ConnectIcon
                        image="/twitter.png"
                        link="https://x.com/andylieou"
                    />
                    <ConnectIcon
                        image="/instagram.webp"
                        link="https://www.instagram.com/andylieou/"
                    />
                
            </div>
            <div className="connect-text-container">
                    <p className="connect-text">andylieou@gmail.com</p>
                </div>
        </>
    );
};

export default Connect;
