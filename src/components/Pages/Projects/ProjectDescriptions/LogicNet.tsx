import React from "react";
import "../Projects.css";

const LogicNet = () => {
    return (
        <>
            <p className="project-body">
                Designed a CNN for image classification using logic gates
                as activations; performed feature engineering, data
                cleaning, cross-validated hyperparameter tuning, and custom
                architecture design.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">PyTorch, Jupyter Notebook</p>
            <div style={{ height: "20px" }} />
            <img
                src="/logic-net.png"
                alt="logic net architecture"
                className="project-card-image"
            ></img>
        </>
    );
};

export default LogicNet;
