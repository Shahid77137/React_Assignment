// // import React, { useState } from 'react';
// // import TodoItem from './TodoItem';

// // const TodoList = ({ todos, updateTodo, deleteTodo }) => {
// //   const [sortOption, setSortOption] = useState('default');

// //   const handleSortChange = (e) => {
// //     setSortOption(e.target.value);
// //   };

// //   const sortedTodos = todos.slice().sort((a, b) => {
// //     if (sortOption === 'title') {
// //       return a.title.localeCompare(b.title);
// //     } else if (sortOption === 'description') {
// //       return a.description.localeCompare(b.description);
// //     } else {
// //       return 0;
// //     }
// //   });

// //   return (
// //     <div>
// //       <h2>Todo List</h2>
// //       <select value={sortOption} onChange={handleSortChange}>
// //         <option value="default">Default</option>
// //         <option value="title">Title</option>
// //         <option value="description">Description</option>
// //       </select>
// //       {sortedTodos.map((todo) => (
// //         <TodoItem
// //           key={todo.id}
// //           todo={todo}
// //           updateTodo={updateTodo}
// //           deleteTodo={deleteTodo}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default TodoList;



// import React, { useState } from 'react';
// import TodoItem from './TodoItem';

// const TodoList = ({ todos, updateTodo, deleteTodo }) => {
//   const [filter, setFilter] = useState('all');

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const filteredTodos = todos.filter((todo) => {
//     if (filter === 'all') {
//       return true;
//     } else if (filter === 'active') {
//       return !todo.completed;
//     } else if (filter === 'completed') {
//       return todo.completed;
//     }
//   });

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <select value={filter} onChange={handleFilterChange}>
//         <option value="all">All</option>
//         <option value="active">Active</option>
//         <option value="completed">Completed</option>
//       </select>
//       {filteredTodos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todo={todo}
//           updateTodo={updateTodo}
//           deleteTodo={deleteTodo}
//         />
//       ))}
//     </div>
//   );
// };

// export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onCompleteTodo, onDeleteTodo, onUpdateTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;