import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([])
  const handleAdd = (newTodo) => {
    setTodoItems([newTodo, ...todoItems])
  }

  const handleDelete = (id) => {
    let updatedItems = todoItems.filter(item => item.id !== id)
    setTodoItems(updatedItems)
  }

  const handleCheckbox = (id) => {
    let updatedItems = todoItems.map(item => {
      if (id === item.id) {
        let toggle = !item.isComplete
        item.isComplete = toggle
      }
      return item;
    })
    setTodoItems(updatedItems)
  }
  return (
    <div className="App">
      <TodoForm onAdd={handleAdd} />
      <TodoList data={todoItems} onDelete={handleDelete} handleCheckbox={handleCheckbox} />
    </div>
  );
}

export default App;

function calculate() {

  function add(num1, num2) {
    return num1 + num2
  }

  add(1, 2)

}

