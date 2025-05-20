import React from "react";

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: "center", paddingTop: "20vh" }}>
            <h1>404</h1>
            <p>Oops! That page doesn’t exist.</p>
            <img
                src="/construction-milo.png"
                style={{ width: "250px" }}
            ></img>
        </div>
    );
};

export default NotFoundPage;
