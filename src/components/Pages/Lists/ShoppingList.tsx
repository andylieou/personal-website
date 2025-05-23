import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { ref, push, set, onValue, DataSnapshot } from "firebase/database";
import "./Lists.css";
import ListItem from "./ListItem";

export interface Item {
    id: string;
    name: string;
    link: string;
    price: string;
}

interface ShoppingListProps {
    list: string;
    title: string;
}

const ensureHTTPs = (url: string): string => {
    if (!/^https?:\/\//i.test(url)) {
        return `https://${url}`;
    }
    return url;
};

const ShoppingList = ({ list, title }: ShoppingListProps) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [price, setPrice] = useState("");
    const [items, setItems] = useState<Item[]>([]);

    const handleSubmit = () => {
        const trimmedName = name.trim();
        const trimmedLink = link.trim();
        const trimmedPrice = price.trim();

        const cleanPrice = trimmedPrice.startsWith("$")
            ? trimmedPrice.slice(1)
            : trimmedPrice;
        const cleanLink = ensureHTTPs(trimmedLink);

        const newRef = push(ref(db, list));
        const newItem = {
            name: trimmedName,
            link: cleanLink,
            price: cleanPrice,
        };
        set(newRef, newItem).catch((err) => {
            alert("You are not authorized to add items.");
            console.error(err);
        });

        setName("");
        setLink("");
        setPrice("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (name.trim() && link.trim() && price.trim()) {
                handleSubmit();
            }
        }
    };

    useEffect(() => {
        const thingsRef = ref(db, list);

        // onValue -> create a listener to get the existing items from the database
        // unsubscribe -> turns off the listener after we use it
        const unsubscribe = onValue(
            thingsRef,
            (snapshot: DataSnapshot) => {
                const data = snapshot.val();
                if (!data) {
                    setItems([]);
                    return;
                }
                const result: Item[] = Object.entries(data).map(
                    // mapping function that uses the key-value pairs from each entry
                    ([key, value]) => {
                        const item = value as Omit<Item, "id">; // this is an item, but it won't have an id
                        return {
                            id: key, // add the id
                            ...item, // copy the rest of the item
                        };
                    }
                );
                setItems(result);
            }
        );
        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="shopping-list-container">
                <h3 className="shopping-list-text">{title}</h3>
                <div className="shopping-list-item-container">
                    {items.map((item) => (
                        <ListItem key={item.id} item={item} list={list} />
                    ))}
                </div>
                <div className="shopping-list-input-container">
                    <input
                        className="shopping-list-input"
                        type="text"
                        placeholder="Item"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <input
                        className="shopping-list-input"
                        type="text"
                        placeholder="Link"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <input
                        className="shopping-list-input"
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className="shopping-list-button"
                        onClick={handleSubmit}
                        disabled={
                            !name.trim() || !link.trim() || !price.trim()
                        }
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShoppingList;
