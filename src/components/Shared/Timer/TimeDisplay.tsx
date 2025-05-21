import React, { useState } from "react";

interface TimeDisplayProps {
    time: string;
    setTime: (newTime: string) => void;
    canEdit: boolean;
}

const formatTime = (input: string): string => {
    const [hourStr, minStr, secStr] = input.split(":");

    // default to 0 if the given value is not in the correct format
    let hours = parseInt(hourStr, 10) || 0;
    let minutes = parseInt(minStr, 10) || 0;
    let seconds = parseInt(secStr, 10) || 0;

    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;

    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};

const TimeDisplay = ({ time, setTime, canEdit }: TimeDisplayProps) => {
    const [isEditing, setIsEditing] = useState(false);

    // when you click "off" / outside of the time (stop editing)
    const handleBlur = () => setIsEditing(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setIsEditing(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (canEdit) {
            setTime(e.target.value);
        }
    };

    return (
        <>
            {isEditing ? (
                <input
                    className="timer-display"
                    type="text"
                    value={time}
                    autoFocus
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <h2
                    className="timer-display"
                    onClick={() => canEdit && setIsEditing(true)}
                    style={{ cursor: canEdit ? "pointer" : "default" }}
                >
                    {formatTime(time)}
                </h2>
            )}
        </>
    );
};

export default TimeDisplay;
