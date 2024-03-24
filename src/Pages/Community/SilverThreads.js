import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd';
import NewPostForm from './NewPostForm';
import './SilverThreads.css'; // Import a CSS file for styling (create a new CSS file)

const SilverThreads = () => {
  const [posts, setPosts] = useState([]);

  // Function to add posts
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="silver-threads-container">
      <h1>Silver Threads - Community Forum</h1>

      <Link to="/silver-threads/new">
        <Button type="primary" style={{ marginBottom: '16px' }}>
          Create New Post
        </Button>
      </Link>

      {/* Pass addPost function to NewPostForm component */}
      <NewPostForm addPost={addPost} />

      {posts.map((post) => (
        <Card key={post.id} title={post.title} style={{ marginBottom: '16px' }}>
          <p>{post.content}</p>
          <p>Category: {post.category}</p>
        </Card>
      ))}

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default SilverThreads;
