// filepath: c:\Users\hp\OneDrive\Desktop\todocontextlocal\src\components\TodoForm.jsx
import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('Medium');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    addTodo({ todo, priority, completed: false });
    setTodo('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={add} className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      >
        <option className=' bg-black' value="High">High</option>
        <option className=' bg-black' value="Medium">Medium</option>
        <option className='bg-black'  value="Low">Low</option>
      </select>
      <button type="submit" className="rounded-lg px-3 py-1 bg-green-600 text-black">
        Add
      </button>
    </form>
  );
}

export default TodoForm;