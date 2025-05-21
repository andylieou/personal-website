import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";
import TimeDisplay from "./TimeDisplay";

const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};

const Timer = () => {
    const alarm = useRef(new Audio("/alert.wav"));
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [time, setTime] = useState(formatTime(timeLeft));

    // track whether the timer has finished loading from local storage
    const [hasLoaded, setHasLoaded] = useState(false);

    // track whether the user manually edited the time input field
    const [userUpdatedTime, setUserUpdatedTime] = useState(false);

    // when this component is first loaded, check if there is a saved time and revert to that
    useEffect(() => {
        const storedEndTime = localStorage.getItem("timerEndTime");
        if (storedEndTime) {
            const endTime = parseInt(storedEndTime, 10);

            // the difference between the saved endTime and the current time
            // if negative, the timer is done
            const newTimeLeft = Math.max(
                0,
                Math.floor((endTime - Date.now()) / 1000)
            );
            setTimeLeft(newTimeLeft);
            if (newTimeLeft > 0) {
                setTimerOn(true);
            }
        }
        setHasLoaded(true); // done loading
    }, []);

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
            alarm.current.play();

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
    }, [timeLeft, timerOn]); // run on change to timeLeft

    useEffect(() => {
        setTime(formatTime(timeLeft));
    }, [timeLeft]);

    useEffect(() => {
        // either: not done loading OR the user did not make a change
        if (!hasLoaded || !userUpdatedTime) return;

        // the user made a change, so we need to update
        const [hourStr, minStr, secStr] = time.split(":");
        const hours = parseInt(hourStr, 10) || 0;
        const minutes = parseInt(minStr, 10) || 0;
        const seconds = parseInt(secStr, 10) || 0;

        setTimeLeft((hours * 60 + minutes) * 60 + seconds);
        setUserUpdatedTime(false); // reset after syncing
    }, [time, hasLoaded, userUpdatedTime]);

    // create a local storage item to save the end time
    useEffect(() => {
        if (timerOn) {
            // save the end time relative to the current time
            const endTime = Date.now() + timeLeft * 1000;
            localStorage.setItem("timerEndTime", endTime.toString());
        } else {
            localStorage.removeItem("timerEndTime");
        }
    }, [timerOn]);

    if (!hasLoaded) {
        return null;
    }

    return (
        <>
            <div className="timer-container">
                <div className="timer-display-container">
                    <TimeDisplay
                        time={time}
                        setTime={(newTime) => {
                            // ensure the update flag is set
                            setUserUpdatedTime(true);
                            setTime(newTime);
                        }}
                        canEdit={!timerOn}
                    />
                </div>
                <div className="timer-button-container">
                    <button
                        className="timer-button"
                        onClick={() => setTimerOn(true)}
                    >
                        Start
                    </button>
                    <button
                        className="timer-button"
                        onClick={() => setTimerOn(false)}
                    >
                        Stop
                    </button>
                    <button
                        className="timer-button"
                        onClick={() => setTimeLeft(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default Timer;
