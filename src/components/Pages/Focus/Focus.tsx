import React from "react";
import "./Focus.css";
import { Timer } from "../../Shared";
import { ToDoList } from "./ToDoList";

const Focus = () => {
    return (
        <>
            <div className="focus-page">
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
                <div className="focus-container">
                    <ToDoList />
                </div>
                <img
                    src="/milo-plane.png"
                    alt="moving dog"
                    className="focus-scrolling-image"
                />
            </div>
        </>
    );
};

export default Focus;
