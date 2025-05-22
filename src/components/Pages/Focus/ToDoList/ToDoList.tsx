import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import { ToDoListItem, CreateToDoListItem } from "./ToDoListItem";

export type Task = {
    id: number;
    text: string;
    done: boolean;
};

const ToDoList = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        // check if we can reload from local storage
        const saved = localStorage.getItem("todoListTasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [text, setText] = useState("Create new item...");

    const toggleDone = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                // if the id matches, copy all the fields except done (set it to true)
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const createTask = (input: string) => {
        if (input.trim() === "") return;

        const newTask: Task = {
            id: Date.now(),
            text: input,
            done: false,
        };

        // copy the tasks array and append newTask
        setTasks([...tasks, newTask]);
    };

    // save tasks to local storage
    useEffect(() => {
        localStorage.setItem("todoListTasks", JSON.stringify(tasks));
        console.log("Saved Tasks");
    }, [tasks]);

    return (
        <>
            <div className="todo-container">
                <h2 className="todo-title">To-Do List</h2>
                <div className="todo-divider" />
                <div className="todo-item-container">
                    <CreateToDoListItem
                        text={text}
                        setText={setText}
                        createTask={createTask}
                    />
                    {tasks
                        .filter((task) => !task.done)
                        .map((task) => (
                            <ToDoListItem
                                key={task.id}
                                task={task}
                                onToggleDone={toggleDone}
                                onDelete={deleteTask}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default ToDoList;
