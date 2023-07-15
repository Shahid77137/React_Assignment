// import React, { useState } from 'react';

// function CreateTodo({ addTodo }) {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() === '') return;
//     const newTodo = {
//       id: Date.now(),
//       title,
//       description,
//     };
//     addTodo(newTodo);
//     setTitle('');
//     setDescription('');
//   };

//   return (
//     <form className="create-todo" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// }

// export default CreateTodo;

import React, { useState } from 'react';

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ID for the new todo
    const newTodo = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
    };

    addTodo(newTodo);

    // Clear input fields
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
