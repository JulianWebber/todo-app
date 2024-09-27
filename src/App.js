import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function toggleTodoCompleted(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodoCompleted={toggleTodoCompleted} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
