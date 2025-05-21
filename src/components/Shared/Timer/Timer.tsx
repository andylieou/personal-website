import React, { useState, useEffect } from "react";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    }, []); // run once when this component mounts and never again

    useEffect(() => {
        if (!timerOn) {
            return;
        }
        if (timeLeft == 0) {
            if (Notification.permission === "granted") {
                new Notification("Time's up!");
            } else {
                alert("Time's up!");
            }
            setTimerOn(false);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer); // cleanup
    }, [timeLeft]); // run on change to timeLeft

    return (
        <>
            <div className="timer-container">
                <h2 className="timer-display">{timeLeft}</h2>
            </div>
        </>
    );
};

export default Timer;
