// import React, { useState } from 'react';
// import TodoList from './TodoList';
// import CreateTodo from './CreateTodo';

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos([...todos, todo]);
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="app">
//       <h1>Todo List</h1>
//       <CreateTodo addTodo={addTodo} />
//       <TodoList todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to update a todo
  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
