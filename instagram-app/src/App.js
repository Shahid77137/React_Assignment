import React, { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreate = (username, caption) => {
    const newPost = {
      id: Date.now(),
      username,
      caption,
      likes: 0,
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

  const handleCommentAdd = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
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
        onCommentAdd={handleCommentAdd}
      />
    </div>
  );
};

const PostForm = ({ onPostCreate }) => {
  const [username, setUsername] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostCreate(username, caption);
    setUsername('');
    setCaption('');
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
      <button type="submit">Create Post</button>
    </form>
  );
};

const PostList = ({ posts, onPostDelete, onPostLike, onCommentAdd }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onPostDelete={onPostDelete}
          onPostLike={onPostLike}
          onCommentAdd={onCommentAdd}
        />
      ))}
    </div>
  );
};

const Post = ({ post, onPostDelete, onPostLike, onCommentAdd }) => {
  const handleDelete = () => {
    onPostDelete(post.id);
  };

  const handleLike = () => {
    onPostLike(post.id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    onCommentAdd(post.id, comment);
    e.target.comment.value = '';
  };

  return (
    <div>
      <h3>{post.username}</h3>
      <p>{post.caption}</p>
      <p>Likes: {post.likes}</p>
      <button onClick={handleLike}>Like</button>
      <h4>Comments</h4>
      <ul>
        {post.comments.map((comment, index) => (
          <li key={index}>{comment}</li>
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