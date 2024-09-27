import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodoCompleted, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodoCompleted={() => toggleTodoCompleted(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;