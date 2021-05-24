import React from 'react';
import "./TodoItem.css";

function TodoItem(props) {
    const { id, name, isComplete } = props.item;

    return (
        <li >
            <input type="checkbox" checked={isComplete} onChange={() => props.handleCheckbox(id)} />
            <p className={isComplete ? "complete" : ""}>{name}</p>
            <button>Edit</button>
            <button onClick={() => props.onDelete(id)}>Delete</button>
        </li>

    )
}
export default TodoItem;