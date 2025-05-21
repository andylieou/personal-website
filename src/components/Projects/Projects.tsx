import React from "react";
import ProjectCard from "./ProjectCard";
import { Kernel, Emulator } from "./ProjectDescriptions";

const Projects = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(600px, 1fr))",
                    gap: "16px",
                    padding: "16px",
                }}
            >
                <ProjectCard
                    title="x86-32 Kernel"
                    body={<Kernel />}
                ></ProjectCard>
                <ProjectCard
                    title="System Emulator"
                    body={<Emulator />}
                ></ProjectCard>
                <ProjectCard
                    title="VRBO Booking Request Migration"
                    body="body"
                ></ProjectCard>
                <ProjectCard
                    title="Logical Neural Network"
                    body="body"
                ></ProjectCard>
                <ProjectCard
                    title="AI Pacman Agent"
                    body="body"
                ></ProjectCard>
                <ProjectCard
                    title="Personal Website"
                    body="body"
                ></ProjectCard>
                <ProjectCard title="Puppy Chat" body="body"></ProjectCard>
                <ProjectCard
                    title="Convolutional Neural Network"
                    body="body"
                ></ProjectCard>
                <ProjectCard
                    title="Recurrent Neural Network"
                    body="body"
                ></ProjectCard>
                <ProjectCard title="SeedWise" body="body"></ProjectCard>
                <ProjectCard
                    title="Memory Manager"
                    body="body"
                ></ProjectCard>
            </div>
        </>
    );
};

export default Projects;
