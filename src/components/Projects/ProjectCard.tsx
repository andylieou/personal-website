import React, { useState, ReactNode } from "react";
import "./Projects.css";

interface ProjectCardProps {
    title: string;
    body: ReactNode;
    image?: ReactNode;
    repoLink?: string;
    exampleLink?: string;
}

const ProjectCard = ({
    title,
    body,
    image,
    repoLink,
    exampleLink,
}: ProjectCardProps) => {
    const [flipped, setFlipped] = useState(false);

    const onRepoClick = () => {
        if (repoLink) {
            open(repoLink, "_blank");
        } else {
            alert(
                `Unfortunately, the code for this project is not available. Please reach out to andylieou@gmail.com for more information.`
            );
        }
    };

    const onExampleClick = () => {
        if (exampleLink) {
            open(exampleLink, "_blank");
        } else {
            alert(
                `Unfortunately, no example of this project is available. Please reach out to andylieou@gmail.com for more information.`
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
                    <h2>{title}</h2>
                </div>
                <div className="project-card-back">
                    <div className="project-card-body">{body}</div>
                    <div>{image}</div>
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
                                onExampleClick();
                            }}
                        >
                            Example
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
