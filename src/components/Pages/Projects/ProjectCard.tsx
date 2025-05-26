import React, { useState, ReactNode } from "react";
import "./Projects.css";

interface ProjectCardProps {
    title: string;
    body: ReactNode;
    repoLink?: string;
    learnMoreLink?: string;
}

const ProjectCard = ({
    title,
    body,
    repoLink,
    learnMoreLink,
}: ProjectCardProps) => {
    const [flipped, setFlipped] = useState(false);

    const onRepoClick = () => {
        if (repoLink) {
            open(repoLink, "_blank");
        } else {
            alert(
                `Unfortunately, the code for this project is not available. Please contact andylieou@gmail.com for more information.`
            );
        }
    };

    const onLearnMoreClick = () => {
        if (learnMoreLink) {
            open(learnMoreLink, "_blank");
        } else {
            alert(
                `Unfortunately, no additional information about this project is available. Please contact andylieou@gmail.com with any questions.`
            );
        }
    };

    return (
        <div
            className="project-card-container"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`project-card-inner ${
                    flipped ? "flipped" : ""
                }`}
            >
                <div className="project-card-front">
                    <h2 style={{ textAlign: "center" }}>{title}</h2>
                </div>
                <div className="project-card-back">
                    <div className="project-card-body">{body}</div>
                    <div className="project-card-button-row">
                        <button
                            className="project-card-button"
                            onClick={(e) => {
                                e.stopPropagation(); // prevent the card from flipping
                                onRepoClick();
                            }}
                        >
                            Repository
                        </button>
                        <button
                            className="project-card-button"
                            onClick={(e) => {
                                e.stopPropagation(); // prevent the card from flipping
                                onLearnMoreClick();
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
