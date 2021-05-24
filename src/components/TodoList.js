import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList(props) {
    const todoItemsArray = props.data;


    return (
        <ul>
            <h1>Todo List</h1>
            {todoItemsArray.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDelete={props.onDelete}
                        handleCheckbox={props.handleCheckbox}
                    />
                );
            })}
        </ul>
    );
}

export default TodoList;
