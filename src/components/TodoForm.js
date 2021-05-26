import React, { Component, useState } from 'react';
import "./TodoForm.css"

function TodoForm(props) {
    const [todoInput, setTodoInput] = useState("")

    const handleAddTodo = (event) => {
        event.preventDefault();

        let todoItem = {
            id: Math.random(),
            name: todoInput,
            isComplete: false,
        }
        props.onAdd(todoItem)
        setTodoInput("")
    }

    const handleInputChange = (event) => {
        setTodoInput(event.target.value)
    }
    return (
        <div>
            <form>
                <p>Add Todo Form</p>
                <input value={todoInput} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>Create Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;