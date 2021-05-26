import React, { Component, useState } from 'react';
import "./TodoForm.css"

function TodoForm(props) {
    const { id, name, isComplete } = props.currentTodo


    const handleAddTodo = (event) => {
        event.preventDefault();

        let todoItem = {
            id: Math.random(),
            name: name,
            isComplete: false,
        }
        props.handleSubmit(todoItem)
    }

    const handleInputChange = (event) => {
        props.setCurrentTodo((prevState) => ({
            ...prevState,
            name: event.target.value
        }))
    }
    return (
        <div>
            <form>
                <p>{props.isEditing ? "Edit Todo Form" : "Add Todo Form"}</p>
                <input value={name} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>{!props.isEditing ? "Create Todo" : "Edit Todo"}</button>
            </form>
        </div>
    )
}

export default TodoForm;