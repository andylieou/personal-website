import React from "react";

const CNN = () => {
    return (
        <>
            <p className="project-body">
                Built and trained CNNs for image and audio classification.
                Used Fashion MNIST for clothing classification and
                visualized convolutional kernels to interpret feature
                learning. For audio, applied 1-D CNNs to classify spoken
                digits (“one” to “nine”) using 240-dimensional acoustic
                features, focusing on optimizing temporal patterns and
                model performance.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">
                PyTorch, Jupyter Notebook
            </p>
            <div style={{ height: "20px" }} />
            <img src="/cnn.png" alt="cnn" style={{ width: "500px" }}></img>
        </>
    );
};

export default CNN;
