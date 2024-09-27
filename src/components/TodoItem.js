
import React from 'react';

function TodoItem({ todo, toggleTodoCompleted, deleteTodo }) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={toggleTodoCompleted}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo} className="text-red-500">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

