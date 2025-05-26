import React from "react";
import "../Projects.css";

const SeedWise = () => {
    return (
        <>
            <p className="project-body">
                With a focus on sustainability, I co-developed an app in
                Swift and Firebase to recommend plants based on users'
                geographic data, focusing on analytics and compliance. Won
                Most Creative Hack.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">Swift, Firebase</p>
            <div style={{ height: "20px" }} />
            <img
                src="/seedwise.png"
                alt="seedwise example"
                className="project-card-image"
                style={{ maxWidth: "300px" }}
            ></img>
        </>
    );
};

export default SeedWise;
