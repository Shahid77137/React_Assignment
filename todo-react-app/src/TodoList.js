// import React from 'react';
// import TodoItem from './TodoItem';

// function TodoList({ todos, deleteTodo }) {
//   return (
//     <ul className="todo-list">
//       {todos.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
//       ))}
//     </ul>
//   );
// }

// export default TodoList;

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
