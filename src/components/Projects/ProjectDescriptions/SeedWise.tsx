import React from "react";

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
                style={{ width: "250px" }}
            ></img>
        </>
    );
};

export default SeedWise;
