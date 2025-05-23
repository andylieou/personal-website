import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged,
    signInWithPopup,
    User,
} from "firebase/auth";
import "./Lists.css";
import ShoppingList from "./ShoppingList";
import { signOut } from "firebase/auth";

const Lists = () => {
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

    return (
        <>
            <div className="list-container">
                <ShoppingList list="clothes" title="Clothes" />
                <ShoppingList list="electronics" title="Electronics" />
                <ShoppingList list="kitchen" title="Kitchen" />
                <ShoppingList list="miscellaneous" title="Miscellaneous" />
            </div>
            <div className="list-button-container">
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="list-log-button"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="list-log-button"
                    >
                        Sign in with Google
                    </button>
                )}
            </div>
        </>
    );
};

export default Lists;
