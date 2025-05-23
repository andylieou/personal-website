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

const Lists = () => {
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
        <div className="list-container">
            <ShoppingList list="clothes" title="Clothes" />
            <ShoppingList list="electronics" title="Electronics" />
            <ShoppingList list="kitchen" title="Kitchen" />
            <ShoppingList list="miscellaneous" title="Miscellaneous" />
        </div>
    );
};

export default Lists;
