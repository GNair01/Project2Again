import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './App.css';

export const Blog = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([
    { id: 1, author: 'Alex', text: 'Great article! Really liked the breakdown of state management.' },
    { id: 2, author: 'Jordan', text: 'Super clear explanation of React Context.' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      { id: Date.now(), author: user.username, text: newComment.trim() }
    ]);
    setNewComment('');
  };

  return (
    <div className="blog-container">
      <article className="post-card">
        <h1>Building Modern React Apps with Context API</h1>
        <p className="post-meta">Published on July 29 • 5 min read</p>
        <p className="post-body">
          State management is a crucial aspect of modern web applications. The React Context API allows 
          you to share values across component trees without explicitly passing props down manually at 
          every level...
        </p>
      </article>

      <section className="comments-section">
        <h3>Discussion ({comments.length})</h3>

        {/* Conditional Rendering for Comment Box */}
        {user ? (
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={`Write a response as @${user.username}...`}
              rows={3}
            />
            <button type="submit" className="btn btn-primary">Post Comment</button>
          </form>
        ) : (
          <div className="login-prompt-banner">
            <p>🔒 You must be logged in to participate in the discussion.</p>
            <Link to="/login" className="btn btn-secondary">Log In to Comment</Link>
          </div>
        )}

        <div className="comments-list">
          {comments.map((item) => (
            <div key={item.id} className="comment-item">
              <strong>@{item.author}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};