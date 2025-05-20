import React from "react";
import { useNavigate } from "react-router-dom";
import "./Control.css";

interface ControlPanelButtonProps {
    title: string;
    page: string;
}

const ControlPanelButton = ({ title, page }: ControlPanelButtonProps) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(page);
    };

    return (
        <>
            <button className="control-button" onClick={handleClick}>
                {title}
            </button>
        </>
    );
};

export default ControlPanelButton;
