// import React, { useState } from 'react';

// const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedTitle, setUpdatedTitle] = useState(todo.title);
//   const [updatedDescription, setUpdatedDescription] = useState(todo.description);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     const updatedTodo = {
//       ...todo,
//       title: updatedTitle,
//       description: updatedDescription,
//     };
//     updateTodo(updatedTodo);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setUpdatedTitle(todo.title);
//     setUpdatedDescription(todo.description);
//   };

//   const handleDelete = () => {
//     deleteTodo(todo.id);
//   };

//   return (
//     <div>
//       {!isEditing ? (
//         <div>
//           <h3>{todo.title}</h3>
//           <p>{todo.description}</p>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             value={updatedTitle}
//             onChange={(e) => setUpdatedTitle(e.target.value)}
//           />
//           <input
//             type="text"
//             value={updatedDescription}
//             onChange={(e) => setUpdatedDescription(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TodoItem;

import React, { useState } from 'react';

function TodoItem({ index, todo, onCompleteTodo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(todo.text);

  const handleDelete = () => {
    onDeleteTodo(index);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setUpdatedValue(e.target.value);
  };

  const handleUpdate = () => {
    if (updatedValue.trim() !== '') {
      onUpdateTodo(index, updatedValue);
      setIsEditing(false);
    }
  };

  const handleToggleComplete = () => {
    onCompleteTodo(index);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedValue}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="buttons">
            <button onClick={handleToggleEdit}>Edit</button>
            <button onClick={handleToggleComplete}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;