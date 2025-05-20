import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import ControlPanelButton from "./ControlPanelButton";
import HomePage from "../HomePage/HomePage";
import RollingImage from "../Elements/RollingImage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

const Buttons = () => {
    return (
        <div
            className="panel"
            style={{
                display: "grid",
                gridTemplateColumns:
                    "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                padding: "16px",
            }}
        >
            <ControlPanelButton title="Home" page="/" />
            <ControlPanelButton title="About Me" page="/about-me" />
            <ControlPanelButton title="Projects" page="/projects" />
            <ControlPanelButton title="Interests" page="/interests" />
            <ControlPanelButton title="Connect" page="/connect" />
        </div>
    );
};

const Panel = () => {
    const location = useLocation();
    const onHomePage = location.pathname === "/";

    return (
        <>
            {!onHomePage && <Buttons />}
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about-me" element={<AboutMe />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {onHomePage && <Buttons />}
            {onHomePage && <RollingImage />}
        </>
    );
};

const ControlPanel = () => {
    return (
        <>
            <Router>
                <Panel />
            </Router>
        </>
    );
};

export default ControlPanel;
