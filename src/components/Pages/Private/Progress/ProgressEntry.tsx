import React, { useEffect, useState } from "react";
import "./Progress.css";
import { formatDate } from "./CreateEntry";
import { db } from "../../../../firebase";
import { ref, remove } from "firebase/database";

export interface Entry {
    id: string;
    date: number;
    weight: number;
    calories: number;
    steps: number;
}

interface ProgressEntryProps {
    sortBy: string;
    top: number;
    left: number;
    entry: Entry;
}

const getField = (sortBy: string, entry: Entry): number => {
    if (sortBy === "weight") {
        return entry.weight;
    } else if (sortBy === "calories") {
        return entry.calories;
    } else if (sortBy === "steps") {
        return entry.steps;
    }
    return 0;
};

const ProgressEntry = ({
    sortBy,
    top,
    left,
    entry,
}: ProgressEntryProps) => {
    const handleDelete = (id: string) => {
        const itemRef = ref(db, `private/${id}`);
        remove(itemRef).catch((err) =>
            console.error("Delete failed:", err)
        );
    };

    return (
        <>
            <div
                className="progress-entry"
                style={{
                    border: "1px solid black",
                    position: "absolute",
                    top: `${top + 3}px`,
                    left: `${left}px`,
                    borderRadius: "100%",
                    height: "50px",
                    width: "50px",
                    margin: "0 8px",
                }}
                onDoubleClick={() => {
                    handleDelete(entry.id);
                }}
            >
                <div className="progress-hidden-text">
                    <p>{formatDate(new Date(entry.date))}</p>
                </div>
                <p className="progress-text" style={{ fontSize: "12px" }}>
                    {getField(sortBy, entry)}
                </p>
            </div>
        </>
    );
};

export default ProgressEntry;
