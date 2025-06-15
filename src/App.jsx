import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TodoProvider } from './contexts';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'priority') {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return b.id - a.id; // date sorting
    });

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {isAuthenticated ? <Logout /> : <Login />}
          </div>
          {isAuthenticated && (
            <>
              <div className="mb-4">
                <TodoForm />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <label className="text-sm mr-2">Filter: </label>
                  <select
                    className="bg-gray-700 text-white px-2 py-1 rounded"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm mr-2">Sort by: </label>
                  <select
                    className="bg-gray-700 text-white px-2 py-1 rounded"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="date">Date</option>
                    <option value="priority">Priority</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-y-3">
                {filteredTodos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoList todo={todo} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;