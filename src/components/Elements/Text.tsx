import React, { ReactNode } from "react";
import "./Text.css";

interface TextProps {
    title: string;
    content?: ReactNode;
    body?: string;
    center?: boolean;
}

const Text = ({ title, body, content, center }: TextProps) => {
    if (content) {
        return (
            <>
                <div className="text-box">
                    <h2 className="text-title">{title}</h2>
                    <hr className="text-divider" />
                    <div>{content}</div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="text-box">
                    <h2 className="text-title">{title}</h2>
                    <hr className="text-divider" />
                    <p
                        className={
                            center ? "centered-text-body" : "text-body"
                        }
                    >
                        {body}
                    </p>
                </div>
            </>
        );
    }
};

export default Text;
