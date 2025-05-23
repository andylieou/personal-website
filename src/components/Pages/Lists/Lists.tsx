import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged,
    getRedirectResult,
} from "firebase/auth";
import "./Lists.css";
import ShoppingList from "./ShoppingList";

const Lists = () => {
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
    getRedirectResult(auth)
        .then((result) => {
            if (result?.user) {
                console.log("✅ User just signed in:", result.user.uid);
            }
        })
        .catch((error) => {
            console.error("❌ Redirect error:", error.code, error.message);
        });

    if (checkingAuth) return null; // could return a loading screen here

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
