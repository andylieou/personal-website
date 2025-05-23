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
} from "firebase/auth";

const Focus = () => {
    const [checkingAuth, setCheckingAuth] = useState(true);

    // get the user to sign in!
    useEffect(() => {
        // onAuthStateChanged waits for Firebase to confirm login status
        // then, we either move forward OR prompt the user to sign in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("✅ Already signed in:", user.uid);
                setCheckingAuth(false);
            } else {
                const provider = new GoogleAuthProvider();
                signInWithRedirect(auth, provider);
            }
        });

        return () => unsubscribe();
    }, []);

    // output the UID after a user is prompted to sign in
    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result?.user) {
                    console.log(
                        "✅ User just signed in:",
                        result.user.uid
                    );
                }
            })
            .catch((error) => {
                console.error(
                    "❌ Redirect error:",
                    error.code,
                    error.message
                );
            });
    }, []);

    if (checkingAuth) return null; // could return a loading screen here

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
