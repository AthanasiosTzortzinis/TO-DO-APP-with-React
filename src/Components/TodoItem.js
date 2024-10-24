import React from 'react';
import './TodoItem.css'; 

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button className="edit-btn" onClick={() => onEdit(todo.id)}>
        Edit
      </button>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
