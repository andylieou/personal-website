import React from "react";
import "../Projects.css";

const PuppyChat = () => {
    return (
        <>
            <p className="project-body">
                Created an interactive website that lets users chat with a
                neural network fine-tuned from GPT-2 to mimic my dog’s
                personality and behavior. The site combines a responsive
                front end with a backend that serves model responses and
                showcases both custom model deployment and conversational
                AI integration.
            </p>
            <div style={{ height: "10px" }} />
            <p className="project-body">
                React, TypeScript, PyTorch, Jupyter Notebook, HTML, CSS
            </p>
            <div style={{ height: "10px" }} />
            <img
                src="/milo-chat.png"
                alt="example milo chat"
                className="project-card-image"
            ></img>
        </>
    );
};

export default PuppyChat;
