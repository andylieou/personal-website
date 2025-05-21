import React from "react";

const Memory = () => {
    return (
        <>
            <p className="project-body">
                Implemented a custom memory allocator in C, building a
                naive version of malloc and free from scratch. Incorporated
                features like splitting, coalescing, extending the heap,
                and optional binning to manage free blocks efficiently.
                Used headers, footers, and bit manipulation to track
                allocation metadata and alignment, with a focus on
                minimizing fragmentation and optimizing performance through
                careful block management strategies.
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
