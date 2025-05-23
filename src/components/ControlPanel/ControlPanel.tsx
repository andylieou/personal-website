import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import ControlPanelButton from "./ControlPanelButton";
import { RollingImage } from "../Shared";
import {
    HomePage,
    NotFoundPage,
    AboutMe,
    Projects,
    Connect,
    Focus,
    Lists,
} from "../Pages";

const Buttons = () => {
    return (
        <div
            className="panel"
            style={{
                display: "flex",
                flexWrap: "wrap",
                // gridTemplateColumns:
                //     "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
                padding: "16px",
                justifyContent: "center",
            }}
        >
            <ControlPanelButton title="Home" page="/" />
            <ControlPanelButton title="About Me" page="/about-me" />
            <ControlPanelButton title="Projects" page="/projects" />
            <ControlPanelButton title="Focus" page="/focus" />
            <ControlPanelButton title="Lists" page="/lists" />
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
                <Route path="/focus" element={<Focus />}></Route>
                <Route path="/lists" element={<Lists />}></Route>
                <Route path="/connect" element={<Connect />}></Route>
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
