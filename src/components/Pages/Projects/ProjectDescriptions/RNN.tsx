import React from "react";
import "../Projects.css";

const RNN = () => {
    return (
        <>
            <p className="project-body">
                Built RNNs for sequence modeling tasks, including a copy
                task where kernel visualizations revealed a “store and
                dump” memory strategy. Implemented another RNN using
                backpropagation through time for next-word prediction,
                analyzing hidden state dynamics and visualizing cell states
                to interpret how the model retained and processed
                contextual information across sequences.
            </p>
            <div style={{ height: "10px" }} />
            <p className="project-body">PyTorch, Jupyter Notebook</p>
            <div style={{ height: "10px" }} />
            <img
                src="/rnn.png"
                alt="rnn"
                className="project-card-image"
            ></img>
        </>
    );
};

export default RNN;
