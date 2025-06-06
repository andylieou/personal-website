import React, { useEffect, useState } from "react";
import "./Focus.css";
import { Timer } from "../../Shared";
import { ToDoList } from "./ToDoList";
import { auth } from "../../../firebase";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged,
    signInWithPopup,
    User,
} from "firebase/auth";

const Focus = () => {
    const [user, setUser] = useState<User | any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            // try popup first
            await signInWithPopup(auth, provider);
        } catch (err: any) {
            // if popup fails (like in restricted mobile browsers), fall back to redirect
            // this probably won't work cause redirect took years off my life
            console.warn(
                "Popup failed, falling back to redirect:",
                err.message
            );
            try {
                await signInWithRedirect(auth, provider);
            } catch (redirectErr: any) {
                console.error(
                    "Redirect also failed:",
                    redirectErr.message
                );
            }
        }
    };

    useEffect(() => {
        document.body.classList.add("no-x-scroll");

        return () => {
            document.body.classList.remove("no-x-scroll");
        };
    }, []);

    return (
        <>
            <div className="focus-page">
                <div className="focus-container">
                    <Timer />
                    <div>
                        <iframe
                            className="focus-video"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jfKfPfyJRdk?si=wRKT1jeCpuZW6cJV"
                            title="Lofi"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                {user ? (
                    <div className="focus-container">
                        <ToDoList />
                    </div>
                ) : (
                    <div className="focus-button-container">
                        <button
                            onClick={handleLogin}
                            className="focus-login-button"
                        >
                            Sign in with Google to create a To-Do List
                        </button>
                    </div>
                )}
                <img
                    src="/milo-plane.png"
                    alt="moving dog"
                    className="focus-scrolling-image"
                />
            </div>
        </>
    );
};

export default Focus;
