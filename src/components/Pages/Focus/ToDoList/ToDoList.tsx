import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import { db, auth } from "../../../../firebase";
import { ToDoListItem, CreateToDoListItem } from "./ToDoListItem";
import {
    ref,
    remove,
    push,
    set,
    onValue,
    DataSnapshot,
} from "firebase/database";
import { signOut } from "firebase/auth";

export type Task = {
    id: string;
    text: string;
};

const ToDoList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (!auth.currentUser) {
            console.log("User is not signed in.");
            return;
        }

        const thingsRef = ref(db, `todoList/${auth.currentUser.uid}`);

        // onValue -> create a listener to get the existing items from the database
        // unsubscribe -> turns off the listener after we use it
        const unsubscribe = onValue(
            thingsRef,
            (snapshot: DataSnapshot) => {
                const data = snapshot.val();
                if (!data) {
                    setTasks([]);
                    return;
                }
                const result: Task[] = Object.entries(data).map(
                    // mapping function that uses the key-value pairs from each entry
                    ([key, value]) => {
                        const item = value as Omit<Task, "id">; // this is an item, but it won't have an id
                        return {
                            id: key, // add the id
                            ...item, // copy the rest of the item
                        };
                    }
                );
                setTasks(result);
            }
        );
        return () => unsubscribe();
    }, []);

    const [text, setText] = useState("Create new item...");

    const deleteTask = (id: string) => {
        if (!auth.currentUser) {
            console.log("User is not signed in.");
            return;
        }
        const itemRef = ref(db, `todoList/${auth.currentUser.uid}/${id}`);
        remove(itemRef).catch((err) =>
            console.error("Delete failed:", err)
        );
    };

    const createTask = () => {
        if (!auth.currentUser) {
            console.log("User is not signed in.");
            return;
        }

        const newRef = push(ref(db, `todoList/${auth.currentUser.uid}`));
        const newTask = {
            text: text,
        };
        set(newRef, newTask).catch((err) => {
            alert("You are not authorized to add items.");
            console.error(err);
        });

        // not needed because we have a listenerl that's pulling from Firebase and updating setTasks
        // setTasks([...tasks, newTask]);
    };

    const handleLogout = () => {
        signOut(auth).catch((error) => {
            console.error("❌ Logout error:", error);
        });
    };

    return (
        <>
            <div className="todo-container">
                <h2 className="todo-title">To-Do List</h2>
                <div className="todo-divider" />
                <div className="todo-item-container">
                    <div className="todo-control-panel">
                        <CreateToDoListItem
                            text={text}
                            setText={setText}
                            createTask={createTask}
                        />
                        <button
                            onClick={handleLogout}
                            className="todo-logout-button"
                        >
                            Log Out
                        </button>
                    </div>
                    {tasks.map((task) => (
                        <ToDoListItem
                            key={task.id}
                            task={task}
                            onToggleDone={deleteTask}
                            onDelete={deleteTask}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToDoList;
