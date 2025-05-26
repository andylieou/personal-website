import React from "react";
import "../Projects.css";

const Kernel = () => {
    return (
        <>
            <p className="project-body">
                Built an x86-32 OS Kernel with preemptive multithreading,
                context switching, garbage collection, an EXT2 file system,
                virtual memory, ELF executable loading, process scheduling,
                and system calls.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">C, C++, x86 assembly</p>
            <div style={{ height: "20px" }} />
            <img
                src="/kernel.png"
                alt="user and kernel mode diagram"
                className="project-card-image"
            ></img>
        </>
    );
};

export default Kernel;
