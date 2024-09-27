import React, { useState } from 'react';
import NoteFrame from './NoteFrame.js';

function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [isNoteFrameVisible, setIsNoteFrameVisible] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <input type="text" placeholder="Add a todo" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTodo(e.target.value);
          e.target.value = '';
        }
      }} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => setIsNoteFrameVisible(true)}>
            {todo}
          </li>
        ))}
      </ul>
      <NoteFrame
        isVisible={isNoteFrameVisible}
        onClose={() => setIsNoteFrameVisible(false)}
      />
    </div>
  );
}

export default AddTodo;

