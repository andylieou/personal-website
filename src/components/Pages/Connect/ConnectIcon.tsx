import React from "react";
import "./Connect.css";

interface ConnectIconProps {
    image: string;
    link: string;
}

const ConnectIcon = ({ image, link }: ConnectIconProps) => {
    const handleClick = () => {
        open(link, "_blank");
    };

    return (
        <>
            <div className="connect-container" onClick={handleClick}>
                <img src={image} className="connect-image" />
            </div>
        </>
    );
};

export default ConnectIcon;
