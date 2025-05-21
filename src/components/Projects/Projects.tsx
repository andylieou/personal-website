import React from "react";
import ProjectCard from "./ProjectCard";
import { Kernel, Emulator, BookingRequests, LogicNet } from "./ProjectDescriptions";

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
                    learnMoreLink="https://wiki.osdev.org/Expanded_Main_Page"
                ></ProjectCard>
                <ProjectCard
                    title="System Emulator"
                    body={<Emulator />}
                    learnMoreLink="https://www.geeksforgeeks.org/pipelining-in-arm/"
                ></ProjectCard>
                <ProjectCard
                    title="VRBO Booking Request Migration"
                    body={<BookingRequests />}
                    learnMoreLink="https://www.vrbo.com/"
                ></ProjectCard>
                <ProjectCard
                    title="Logical Neural Network"
                    body={<LogicNet />}
                    learnMoreLink="https://www.geeksforgeeks.org/introduction-convolution-neural-network/"
                ></ProjectCard>
                <ProjectCard
                    title="AI Pacman Agent"
                    body="coming soon"
                ></ProjectCard>
                <ProjectCard
                    title="Personal Website"
                    body="coming soon"
                ></ProjectCard>
                <ProjectCard
                    title="Puppy Chat"
                    body="coming soon"
                ></ProjectCard>
                <ProjectCard
                    title="Convolutional Neural Network"
                    body="coming soon"
                ></ProjectCard>
                <ProjectCard
                    title="Recurrent Neural Network"
                    body="coming soon"
                ></ProjectCard>
                <ProjectCard
                    title="SeedWise"
                    body="coming soon"
                ></ProjectCard>
                <ProjectCard
                    title="Memory Manager"
                    body="coming soon"
                ></ProjectCard>
            </div>
        </>
    );
};

export default Projects;
