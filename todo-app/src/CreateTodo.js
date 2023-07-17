import React, { useState } from 'react';

const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Please enter a title and description');
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
    };

    addTodo(newTodo);

    setTitle('');
    setDescription('');
    setError('');
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
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateTodo;
