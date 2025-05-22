import React, { useState } from "react";
import { Task } from "./ToDoList";
import { TypingAnimation } from "../../../Shared";

interface ToDoListItemProps {
    task: Task;
    onToggleDone: (id: number) => void;
    onDelete: (id: number) => void;
}

export const ToDoListItem = ({
    task,
    onToggleDone,
    onDelete,
}: ToDoListItemProps) => {
    return (
        <>
            <div className="todo-item">
                <p className="todo-item-text">{task.text}</p>
                <div className="todo-item-button-container">
                    <img
                        src="/done.png"
                        className="todo-item-button"
                        onClick={() => {
                            onToggleDone(task.id);
                        }}
                    ></img>
                    <img
                        src="/delete.png"
                        className="todo-item-button"
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

    const handleBlur = () => setIsEditing(false);

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
                        className="todo-item-text"
                        type="text"
                        value={text}
                        autoFocus
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
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
