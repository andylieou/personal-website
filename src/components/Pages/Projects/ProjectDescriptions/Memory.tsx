import React from "react";

const Memory = () => {
    return (
        <>
            <p className="project-body">
                Implemented a custom memory allocator in C as both a
                reference solution and a lab assignment for students. Built
                a naive version of `malloc` and `free` from scratch,
                incorporating splitting, coalescing, heap extension, and
                optional binning to manage free blocks efficiently. Used
                headers, footers, and bit manipulation to handle allocation
                metadata and alignment, minimizing fragmentation. Also
                developed the test bench, autograders, and infrastructure
                to support student implementations as part of my TA
                responsibilities.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">C</p>
            <div style={{ height: "20px" }} />
            <img
                src="/memory.png"
                alt="memory manager"
                style={{ width: "500px" }}
            ></img>
        </>
    );
};

export default Memory;
