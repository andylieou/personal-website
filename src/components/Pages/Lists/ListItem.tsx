import React from "react";
import { Item } from "./ShoppingList";
import { db } from "../../../firebase";
import { ref, remove } from "firebase/database";

interface ListItemProps {
    item: Item;
    list: string;
}

const ListItem = ({ item, list }: ListItemProps) => {
    const handleDelete = (id: string) => {
        const itemRef = ref(db, `${list}/${id}`);
        remove(itemRef).catch((err) =>
            console.error("Delete failed:", err)
        );
    };

    const onClick = () => {
        open(item.link, "_blank");
    };

    return (
        <div className="list-item">
            <p
                className="shopping-list-item-text"
                onClick={onClick}
            >{`${item.name} $${item.price}`}</p>
            <button
                className="list-item-button"
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                }}
            >
                X
            </button>
        </div>
    );
};

export default ListItem;
