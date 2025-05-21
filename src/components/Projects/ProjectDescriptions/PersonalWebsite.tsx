import React from "react";

const PersonalWebsite = () => {
    return (
        <>
            <p className="project-body">
                Built a personal website using React and TypeScript,
                following best practices in component organization,
                reusable design patterns, and clean project structure.
                Streamlined exports and modularity. The site showcases
                thoughtful full stack development with attention to
                maintainability and scalability.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">React, TypeScript, HTML, CSS</p>
            <div style={{ height: "20px" }} />
            <img
                src="/personal-website.png"
                alt="website home page"
                style={{ width: "500px", border: "1px black solid" }}
            ></img>
        </>
    );
};

export default PersonalWebsite;
