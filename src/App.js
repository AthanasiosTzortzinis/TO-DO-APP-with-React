import React, { useState } from 'react';

import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text: newText } : todo
    )));
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={(id) => {
          const newText = prompt("Edit task:");
          if (newText) editTodo(id, newText);
        }}
      />
    </div>
  );
}

export default App;


