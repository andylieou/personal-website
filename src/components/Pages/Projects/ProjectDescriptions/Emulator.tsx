import React from "react";
import "../Projects.css";

const Emulator = () => {
    return (
        <>
            <p className="project-body">
                Developed a CPU emulator for AArch64 assembly with support
                for ELF executables, featuring a five-stage pipeline,
                caching, and branch prediction. Handled pipeline hazards
                and maintained execution correctness.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">C, AArch64 assembly</p>
            <div style={{ height: "20px" }} />
            <img
                src="/emulator.png"
                alt="architecture diagram"
                className="project-card-image"
            ></img>
        </>
    );
};

export default Emulator;
