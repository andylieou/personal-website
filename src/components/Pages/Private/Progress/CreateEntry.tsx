import React, { useState } from "react";
import "./Progress.css";
import { db } from "../../../../firebase";
import { ref, push, set } from "firebase/database";

export const formatDate = (date: Date): string => {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
};

const parseDateString = (dateStr: string): number => {
    const [mm, dd, yy] = dateStr.split("/").map((s) => parseInt(s, 10));
    const fullYear = 2000 + yy;
    const date = new Date(fullYear, mm - 1, dd);
    return date.getTime();
};

const CreateEntry = () => {
    const [date, setDate] = useState(formatDate(new Date(Date.now())));
    const [weight, setWeight] = useState("");
    const [calories, setCalories] = useState("");
    const [steps, setSteps] = useState("");

    const handleSubmit = () => {
        const trimmedDate = date.trim();

        const newRef = push(ref(db, "private"));
        const newEntry = {
            date: parseDateString(trimmedDate),
            weight: parseFloat(weight),
            calories: parseInt(calories),
            steps: parseInt(steps),
        };
        set(newRef, newEntry).catch((err) => {
            alert("You are not authorized to add items.");
            console.error(err);
        });

        setDate(formatDate(new Date(Date.now())));
        setWeight("");
        setCalories("");
        setSteps("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (
                date.trim() &&
                weight.trim() &&
                calories.trim() &&
                steps.trim()
            ) {
                handleSubmit();
            }
        }
    };

    return (
        <div className="progress-input-container">
            <input
                className="progress-input"
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <input
                className="progress-input"
                type="text"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <input
                className="progress-input"
                type="text"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <input
                className="progress-input"
                type="text"
                placeholder="Steps"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                className="progress-button"
                onClick={handleSubmit}
                disabled={
                    !date.trim() ||
                    !weight.trim() ||
                    !calories.trim() ||
                    !steps.trim()
                }
            >
                Add
            </button>
        </div>
    );
};

export default CreateEntry;
