import React from "react";
import "./Focus.css";
import { Timer } from "../../Shared";

const Focus = () => {
    return (
        <>
            <div className="focus-container">
                <Timer />
                <div>
                    <iframe
                        className="focus-video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/jfKfPfyJRdk?si=wRKT1jeCpuZW6cJV"
                        title="Lofi"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div>
                {/* create a todo list that can be saved to local storage here */}
            </div>
        </>
    );
};

export default Focus;
