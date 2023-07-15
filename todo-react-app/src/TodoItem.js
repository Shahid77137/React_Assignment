// import React from 'react';

// function TodoItem({ todo, deleteTodo }) {
//   const { id, title, description } = todo;

//   const handleDelete = () => {
//     deleteTodo(id);
//   };

//   return (
//     <li className="todo-item">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <button onClick={handleDelete}>Delete</button>
//     </li>
//   );
// }

// export default TodoItem;

import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTodo = {
      ...todo,
      title: updatedTitle,
      description: updatedDescription,
    };
    updateTodo(updatedTodo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTitle(todo.title);
    setUpdatedDescription(todo.description);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
