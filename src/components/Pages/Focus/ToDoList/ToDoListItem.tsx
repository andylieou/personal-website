import React, { useState } from "react";
import { Task } from "./ToDoList";
import { TypingAnimation } from "../../../Shared";
import { db, auth } from "../../../../firebase";
import { ref, set } from "firebase/database";

interface ToDoListItemProps {
    task: Task;
    onToggleDone: (id: string) => void;
    onDelete: (id: string) => void;
}

export const ToDoListItem = ({
    task,
    onToggleDone,
    onDelete,
}: ToDoListItemProps) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(task.text);

    const handleUpdate = () => {
        if (!auth.currentUser) return;
        const taskRef = ref(
            db,
            `todoList/${auth.currentUser.uid}/${task.id}`
        );
        set(taskRef, { text }).catch((err) => {
            alert("update failed");
            console.error(err);
        });
        setEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleUpdate();
        }
    };

    return (
        <>
            <div className="todo-item">
                {editing ? (
                    <input
                        className="todo-item-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={handleUpdate}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                ) : (
                    <p
                        className="todo-item-text"
                        onDoubleClick={() => setEditing(true)}
                    >
                        {task.text}
                    </p>
                )}
                <div className="todo-item-button-container">
                    <img
                        src="/done.png"
                        className="todo-item-button"
                        alt="done"
                        onClick={() => {
                            onToggleDone(task.id);
                        }}
                    ></img>
                    <img
                        src="/delete.png"
                        className="todo-item-button"
                        alt="delete"
                        onClick={() => {
                            onDelete(task.id);
                        }}
                    ></img>
                </div>
            </div>
        </>
    );
};

interface CreateToDoListItemProps {
    text: string;
    setText: (newText: string) => void;
    createTask: (input: string) => void;
}

export const CreateToDoListItem = ({
    text,
    setText,
    createTask,
}: CreateToDoListItemProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const createAndReset = () => {
        setIsEditing(false);
        createTask(text);
        setText("Create a new task...");
    };

    const reset = () => {
        setIsEditing(false);
        setText("Create a new task...");
    };

    const handleBlur = () => reset();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setIsEditing(false);
            createAndReset();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <div className="todo-item">
                {isEditing ? (
                    <input
                        className="todo-item-input"
                        type="text"
                        value={text}
                        autoFocus
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setText("")}
                    />
                ) : (
                    <div
                        className="todo-create-container"
                        onClick={() => setIsEditing(true)}
                    >
                        <TypingAnimation write={text} fontSize={16} />
                    </div>
                )}
            </div>
        </>
    );
};
