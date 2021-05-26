import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({
    id: null,
    name: "",
    isComplete: false,
  });

  const handleEdit = (id) => {
    setIsEditing(true);
    let itemEdit = todoItems.filter(item => item.id === id)
    setCurrentTodo(itemEdit[0])
  };

  const handleSubmit = (newTodo) => {
    if (isEditing) {
      let newItems = todoItems.map(item => {
        if (item.id === currentTodo.id) {
          return currentTodo
        } else {
          return item;
        }
      })
      setTodoItems(newItems)
      setIsEditing(false)
    } else {
      setTodoItems([newTodo, ...todoItems]);
    }
    setCurrentTodo({
      id: null,
      name: "",
      isComplete: false,
    })
  };

  const handleDelete = (id) => {
    let updatedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedItems);
  };

  const handleCheckbox = (id) => {
    let updatedItems = todoItems.map((item) => {
      if (id === item.id) {
        let toggle = !item.isComplete;
        item.isComplete = toggle;
      }
      return item;
    });
    setTodoItems(updatedItems);
  };
  return (
    <div className="App">
      <TodoForm
        handleSubmit={handleSubmit}
        isEditing={isEditing}
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
      />
      <TodoList
        data={todoItems}
        onDelete={handleDelete}
        handleCheckbox={handleCheckbox}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
