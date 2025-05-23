import React from "react";
import { Text } from "../../Shared";
import "./AboutMe.css";

const Background = () => {
    return (
        <>
            <p className="about-me-body">
                I'm a recent graduate from the University of Texas at
                Austin, where I earned my Bachelor's in Computer Science
                with a certicate in Applied Statistical Modeling, (GPA:
                3.97). I’ve always been drawn to the intersection of
                systems, machine learning, and full stack development —
                whether it's building low-level kernels, experimenting with
                neural networks, or crafting modern web apps.
            </p>
            <p className="about-me-body">
                Before college, I graduated as valedictorian of my high
                school class. I’ve continued to push myself academically
                and technically, and I’m especially excited about the
                future of machine learning. I hope to pursue a master’s
                degree in the field one day and keep exploring how
                intelligent systems can be designed, optimized, and scaled
                in the real world.
            </p>
        </>
    );
};

const Experiences = () => {
    return (
        <>
            <p className="about-me-body">
                Over the past few years, I’ve worked across a range of
                technical domains, from systems programming to full stack
                development and applied machine learning. Most recently, I
                interned at Expedia Group, where I led the end-to-end
                migration of VRBO’s booking request flow — modernizing a
                core feature using React, TypeScript, Java, and GraphQL
                through comprehensive full stack development.
            </p>
            <p className="about-me-body">
                During my time at UT Austin, I served as a Course Assistant
                for Computer Architecture, where I supported students
                through discussions, office hours, and assignment feedback,
                deepening both my technical understanding and communication
                skills.
            </p>
            <p className="about-me-body">
                Beyond the classroom and internships, I’ve led and
                contributed to a number of projects: building a preemptive
                x86 kernel with virtual memory and file systems, designing
                a logic gate–based convolutional neural network for image
                classification, and working on tools that automate
                front-end development. These experiences have strengthened
                my ability to work across the stack, dive deep into
                systems, and think critically about how software is built
                and optimized.
            </p>
        </>
    );
};

const Skills = () => {
    const languages: string[] = [
        "Java",
        "C",
        "C++",
        "PyTorch",
        "TypeScript",
        "React",
        "JavaScript",
        "x86 Assembly",
        "AArch64 Assembly",
        "Linux",
        "Python",
    ];
    const skills: string[] = [
        "Machine Learning",
        "Data Science",
        "Modeling & Visualization",
        "Data Analytics",
        "Algorithms",
        "Git",
        "Jupyter Notebook",
    ];
    const courses: string[] = [
        "Data Structures",
        "Discrete Math",
        "Computer Architecture & Organization",
        "Principles of Computer Systems (Operating Systems)",
        "Object Oriented Programming",
        "Algorithms & Complexity",
        "Neural Networks",
        "Principles of Machine Learning",
        "Artificial Intelligence",
        "Elements of Linear Regression",
        "Elements of Data Science",
    ];

    return (
        <>
            <p className="about-me-body">Programming Languages</p>
            <ul className="about-me-list">
                {languages.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="about-me-body">Coursework</p>
            <ul className="about-me-list">
                {courses.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="about-me-body">Skills</p>
            <ul className="about-me-list">
                {skills.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

const AboutMe = () => {
    return (
        <>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "16px",
                    padding: "16px",
                }}
            >
                <Text
                    title="Background"
                    content={<Background />}
                    center={false}
                />
                <Text
                    title="Skills & Coursework"
                    content={<Skills />}
                    center={false}
                />
                <Text
                    title="Experiences"
                    content={<Experiences />}
                    center={false}
                />
            </div>
        </>
    );
};

export default AboutMe;
