import React, { useState, useEffect, useRef } from "react";
import ProgressEntry, { Entry } from "./ProgressEntry";
import "./Progress.css";
import { db } from "../../../../firebase";
import { ref, onValue, DataSnapshot } from "firebase/database";
import CreateEntry from "./CreateEntry";

const getBaseline = (sortBy: string): number => {
    if (sortBy === "weight") {
        return 150;
    } else if (sortBy === "calories") {
        return 2200;
    } else if (sortBy === "steps") {
        return 9000;
    }
    return 0;
};

const getScaleFactor = (sortBy: string): number => {
    if (sortBy === "weight") {
        return 30;
    } else if (sortBy === "calories") {
        return 0.5;
    } else if (sortBy === "steps") {
        return 0.05;
    }
    return 0;
};

const getTop = (sortBy: string, entry: Entry): number => {
    if (sortBy === "weight") {
        return entry.weight - getBaseline(sortBy);
    } else if (sortBy === "calories") {
        return entry.calories - getBaseline(sortBy);
    } else if (sortBy === "steps") {
        return entry.steps - getBaseline(sortBy);
    }
    return 0;
};

const Progress = () => {
    const [sortBy, setSortBy] = useState<string>("steps");
    const [entries, setEntries] = useState<Entry[]>([]);
    const [number, setNumber] = useState<number>(10);

    const viewRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        viewRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        const thingsRef = ref(db, "private");
        const unsubscribe = onValue(
            thingsRef,
            (snapshot: DataSnapshot) => {
                const data = snapshot.val();
                if (!data) {
                    setEntries([]);
                    return;
                }
                const result: Entry[] = Object.entries(data).map(
                    // mapping function that uses the key-value pairs from each entry
                    ([key, value]) => {
                        const item = value as Omit<Entry, "id">; // this is an item, but it won't have an id
                        return {
                            id: key, // add the id
                            ...item, // copy the rest of the item
                        };
                    }
                );
                setEntries(result);
            }
        );
        return () => unsubscribe();
    }, []);

    const desiredEntries = [...entries]
        .sort((a, b) => a.date - b.date)
        .slice(-number);

    const earliestDate = Math.min(...desiredEntries.map((e) => e.date));
    const pixelsPerDay = 20;
    const scaleFactor = getScaleFactor(sortBy);
    const values = desiredEntries.map((entry) => getTop(sortBy, entry));
    const maxValue = Math.max(...values);

    const onSortClick = (by: string) => {
        setSortBy(by);
    };

    return (
        <>
            <h2 className="progress-text" ref={viewRef}>
                Health Tracker
            </h2>
            <div className="progress-container">
                {desiredEntries.map((entry) => {
                    const daysSinceStart = Math.floor(
                        (entry.date - earliestDate) / (1000 * 60 * 60 * 24)
                    );
                    const left = daysSinceStart * pixelsPerDay;
                    const value = getTop(sortBy, entry);
                    const invertedTop = maxValue - value;
                    const top = invertedTop * scaleFactor;

                    return (
                        <ProgressEntry
                            key={entry.id}
                            sortBy={sortBy}
                            top={top}
                            left={left}
                            entry={entry}
                        />
                    );
                })}
            </div>
            <div className="progress-sort-container">
                <button
                    className="progress-sort-button"
                    onClick={() => onSortClick("weight")}
                >
                    Weight
                </button>
                <button
                    className="progress-sort-button"
                    onClick={() => onSortClick("calories")}
                >
                    Calories
                </button>
                <button
                    className="progress-sort-button"
                    onClick={() => onSortClick("steps")}
                >
                    Steps
                </button>
                <input
                    className="progress-input"
                    type="text"
                    placeholder="Entries to Display"
                    value={number}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val > 0) setNumber(val);
                    }}
                />
            </div>
            <CreateEntry />
        </>
    );
};

export default Progress;
