import React from "react";
import "../Projects.css";

const BookingRequests = () => {
    return (
        <>
            <p className="project-body">
                Led the end-to-end migration of VRBO's booking system to a
                modern architecture using React, TypeScript, Java, and
                GraphQL, enhancing performance and user experience.
            </p>
            <div style={{ height: "20px" }} />
            <p className="project-body">
                React, TypeScript, Java, GraphQL
            </p>
            <div style={{ height: "20px" }} />
            <img
                src="/booking.png"
                alt="vrbo logo"
                className="project-card-image"
            ></img>
        </>
    );
};

export default BookingRequests;
