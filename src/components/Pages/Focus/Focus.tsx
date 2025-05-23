import React, { useEffect, useState } from "react";
import "./Focus.css";
import { Timer } from "../../Shared";
import { ToDoList } from "./ToDoList";
import { auth } from "../../../firebase";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged,
    getRedirectResult,
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

        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        try {
            if (isMobile) {
                await signInWithRedirect(auth, provider);
            } else {
                await signInWithPopup(auth, provider);
            }
        } catch (error: any) {
            console.error("❌ Login failed:", error.message);
        }
    };

    if (!user) {
        return (
            <div className="focus-page">
                <button
                    onClick={handleLogin}
                    className="todo-logout-button"
                >
                    Sign in with Google
                </button>
            </div>
        );
    }

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
                <div className="focus-container">
                    <ToDoList />
                </div>
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
