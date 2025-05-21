import React from "react";
import ProjectCard from "./ProjectCard";
import {
    Kernel,
    Emulator,
    BookingRequests,
    LogicNet,
    Pacman,
    PersonalWebsite,
    PuppyChat,
    CNN,
    RNN,
    SeedWise,
} from "./ProjectDescriptions";

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
                    body={<Pacman />}
                    learnMoreLink="https://ai.berkeley.edu/home.html"
                ></ProjectCard>
                <ProjectCard
                    title="Personal Website"
                    body={<PersonalWebsite />}
                    learnMoreLink="https://andylieou.com/"
                    repoLink="https://github.com/andylieou/personal-website"
                ></ProjectCard>
                <ProjectCard
                    title="Puppy Chat"
                    body={<PuppyChat />}
                    learnMoreLink="https://milothedog.com/"
                    repoLink="https://github.com/andylieou/website"
                ></ProjectCard>
                <ProjectCard
                    title="Convolutional Neural Network"
                    body={<CNN />}
                    learnMoreLink="https://www.datacamp.com/tutorial/introduction-to-convolutional-neural-networks-cnns"
                ></ProjectCard>
                <ProjectCard
                    title="Recurrent Neural Network"
                    body={<RNN />}
                    learnMoreLink="https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/"
                ></ProjectCard>
                <ProjectCard
                    title="SeedWise"
                    body={<SeedWise />}
                    learnMoreLink="https://www.behance.net/gallery/166194241/SeedWise"
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
