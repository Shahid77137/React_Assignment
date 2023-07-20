// import React, { useState } from 'react';

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   const handlePostCreate = (username, caption, image) => {
//     const newPost = {
//       id: Date.now(),
//       username,
//       caption,
//       image,
//       likes: 0,
//       comments: [],
//     };

//     setPosts([...posts, newPost]);
//   };

//   const handlePostDelete = (postId) => {
//     setPosts(posts.filter((post) => post.id !== postId));
//   };

//   const handlePostLike = (postId) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId ? { ...post, likes: post.likes + 1 } : post
//       )
//     );
//   };

//   const handleCommentAdd = (postId, comment) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId
//           ? { ...post, comments: [...post.comments, comment] }
//           : post
//       )
//     );
//   };

//   return (
//     <div>
//       <h1>Instagram</h1>
//       <PostForm onPostCreate={handlePostCreate} />
//       <PostList
//         posts={posts}
//         onPostDelete={handlePostDelete}
//         onPostLike={handlePostLike}
//         onCommentAdd={handleCommentAdd}
//       />
//     </div>
//   );
// };

// const PostForm = ({ onPostCreate }) => {
//   const [username, setUsername] = useState('');
//   const [caption, setCaption] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onPostCreate(username, caption);
//     setUsername('');
//     setCaption('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Caption"
//         value={caption}
//         onChange={(e) => setCaption(e.target.value)}
//         required
//       />
//       <button type="submit">Create Post</button>
//     </form>
//   );
// };

// const PostList = ({ posts, onPostDelete, onPostLike, onCommentAdd }) => {
//   return (
//     <div>
//       <h2>Posts</h2>
//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           post={post}
//           onPostDelete={onPostDelete}
//           onPostLike={onPostLike}
//           onCommentAdd={onCommentAdd}
//         />
//       ))}
//     </div>
//   );
// };

// const Post = ({ post, onPostDelete, onPostLike, onCommentAdd }) => {
//   const handleDelete = () => {
//     onPostDelete(post.id);
//   };

//   const handleLike = () => {
//     onPostLike(post.id);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     const comment = e.target.comment.value;
//     onCommentAdd(post.id, comment);
//     e.target.comment.value = '';
//   };

//   return (
//     <div>
//       <h3>{post.username}</h3>
//       <p>{post.caption}</p>
//       <p>Likes: {post.likes}</p>
//       <button onClick={handleLike}>Like</button>
//       <h4>Comments</h4>
//       <ul>
//         {post.comments.map((comment, index) => (
//           <li key={index}>{comment}</li>
//         ))}
//       </ul>
//       <form onSubmit={handleCommentSubmit}>
//         <input type="text" name="comment" placeholder="Add a comment" />
//         <button type="submit">Post Comment</button>
//       </form>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default App;



  import React, { useState } from 'react';
  import './App.css';

  const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreate = (username, caption, image) => {
  const newPost = {
  id: Date.now(),
  username,
  caption,
  image,
  likes: 0,
  dislikes: 0,
  comments: [],
  };
  setPosts([...posts, newPost]);
  };

  const handlePostDelete = (postId) => {
  setPosts(posts.filter((post) => post.id !== postId));
  };

  const handlePostLike = (postId) => {
  setPosts((prevPosts) =>
  prevPosts.map((post) =>
  post.id === postId ? { ...post, likes: post.likes + 1 } : post
  )
  );
  };

  const handlePostDislike = (postId) => {
  setPosts((prevPosts) =>
  prevPosts.map((post) =>
  post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
  )
  );
  };

  const handleCommentAdd = (postId, comment) => {
  setPosts((prevPosts) =>
  prevPosts.map((post) =>
  post.id === postId
  ? { ...post, comments: [...post.comments, comment] }
  : post
  )
  );
  };

  const handleCommentDelete = (postId, commentIndex) => {
  setPosts((prevPosts) =>
  prevPosts.map((post) =>
  post.id === postId
  ? {
  ...post,
  comments: post.comments.filter(
  (_, index) => index !== commentIndex
  ),
  }
  : post
  )
  );
  };

  return (
  <div>
  <h1>Instagram</h1>
  <PostForm onPostCreate={handlePostCreate} />
  <PostList
      posts={posts}
      onPostDelete={handlePostDelete}
      onPostLike={handlePostLike}
      onPostDislike={handlePostDislike}
      onCommentAdd={handleCommentAdd}
      onCommentDelete={handleCommentDelete}
    />
  </div>
  );
  };

  const PostForm = ({ onPostCreate }) => {
  const [username, setUsername] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  onPostCreate(username, caption, image);
  setUsername('');
  setCaption('');
  setImage('');
  };

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }

  };

  return (
  <form onSubmit={handleSubmit}>
  <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  required
  />
  <input
  type="text"
  placeholder="Caption"
  value={caption}
  onChange={(e) => setCaption(e.target.value)}
  required
  />
  <input type="file" accept="image/*" onChange={handleImageUpload} required />
  <button type="submit">Create Post</button>
  </form>
  );
  };

  const PostList = ({
  posts,
  onPostDelete,
  onPostLike,
  onPostDislike,
  onCommentAdd,
  onCommentDelete,
  }) => {
  return (
  <div>
  <h2>Posts</h2>
  {posts.map((post) => (
  <Post
        key={post.id}
        post={post}
        onPostDelete={onPostDelete}
        onPostLike={onPostLike}
        onPostDislike={onPostDislike}
        onCommentAdd={onCommentAdd}
        onCommentDelete={onCommentDelete}
      />
  ))}
  </div>
  );
  };

  const Post = ({
  post,
  onPostDelete,
  onPostLike,
  onPostDislike,
  onCommentAdd,
  onCommentDelete,
  }) => {
  const handleDelete = () => {
  onPostDelete(post.id);
  };

  const handleLike = () => {
  onPostLike(post.id);
  };

  const handleDislike = () => {
  onPostDislike(post.id);
  };

  const handleCommentSubmit = (e) => {
  e.preventDefault();
  const comment = e.target.comment.value;
  onCommentAdd(post.id, comment);
  e.target.comment.value = '';
  };

  const handleCommentDelete = (commentIndex) => {
  onCommentDelete(post.id, commentIndex);
  };

  return (
  <div>
  <h3>{post.username}</h3>
  <p>{post.caption}</p>
  <p>Likes: {post.likes}</p>
  <p>Dislikes: {post.dislikes}</p>
  <button onClick={handleLike}>Like</button>
  <button onClick={handleDislike}>Dislike</button>
  <h4>Comments</h4>
  <ul>
  {post.comments.map((comment, index) => (
  <li key={index}>
  {comment}
  <button onClick={() => handleCommentDelete(index)}>Delete</button>
  </li>
  ))}
  </ul>
  <form onSubmit={handleCommentSubmit}>
  <input type="text" name="comment" placeholder="Add a comment" />
  <button type="submit">Post Comment</button>
  </form>
  <button onClick={handleDelete}>Delete</button>
  </div>
  );
  };

  export default App;