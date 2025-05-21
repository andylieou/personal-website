import React from "react";

const Pacman = () => {
    return (
        <>
            <p className="project-body">
                Developed an intelligent Pacman agent with multiple modes,
                including reflex agent, A* search, minimax and expectimax,
                approximate Q-learning, particle filtering, and Naive
                Bayes, demonstrating advanced AI techniques and
                decision-making strategies.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">Python</p>
            <div style={{ height: "20px" }} />
            <img src="/pacman.png" style={{ width: "500px" }}></img>
        </>
    );
};

export default Pacman;
