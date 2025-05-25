import React, { useEffect, useState } from "react";
import { db, auth } from "../../../firebase";
import { ref, get } from "firebase/database";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged,
    signInWithPopup,
    User,
} from "firebase/auth";
import { signOut } from "firebase/auth";
import "./Private.css";
import { Progress } from "./Progress";

const Private = () => {
    const [canAccess, setCanAccess] = useState(false);

    // attempt to access the private part of Firebase to confirm who's logged in
    useEffect(() => {
        const checkAccess = async () => {
            try {
                const snapshot = await get(ref(db, "private"));
                if (snapshot.exists()) {
                    setCanAccess(true);
                } else {
                    setCanAccess(false);
                }
            } catch (error) {
                console.error(
                    "Access denied or path does not exist",
                    error
                );
                setCanAccess(false);
            }
        };

        checkAccess();
    }, []);

    const [user, setUser] = useState<User | any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth).catch((error) => {
            console.error("❌ Logout error:", error);
        });
        window.location.reload();
    };

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            window.location.reload();
        } catch (err: any) {
            console.warn(
                "Popup failed, falling back to redirect:",
                err.message
            );
            try {
                await signInWithRedirect(auth, provider);
                window.location.reload();
            } catch (redirectErr: any) {
                console.error(
                    "Redirect also failed:",
                    redirectErr.message
                );
            }
        }
    };

    return (
        <>
            {canAccess ? (
                <>
                    <div className="private-page">
                        <div className="private-container">
                            <Progress />
                            <button
                                className="private-log-button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="private-page">
                        {user ? (
                            <>
                                <p className="private-text">
                                    Access Denied
                                </p>
                                <button
                                    className="private-log-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="private-log-button"
                                    onClick={handleLogin}
                                >
                                    Sign in with Google
                                </button>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Private;
