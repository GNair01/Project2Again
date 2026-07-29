import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './App.css';

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="landing-container">
      <header className="hero-section">
        <span className="badge">Welcome to Project 2</span>
        <h1 className="hero-title">Share Your Ideas With the World</h1>
        <p className="hero-subtitle">
          A clean, modern platform designed for creators, thinkers, and storytellers. 
          Discover insightful articles or publish your own perspective today.
        </p>
        
        <div className="cta-group">
          <Link to="/blog" className="btn btn-primary">
            Explore Blog
          </Link>
          {!user ? (
            <Link to="/login" className="btn btn-secondary">
              Login to Write
            </Link>
          ) : (
            <span className="welcome-tag">
              Logged in as <strong>{user.username}</strong>
            </span>
          )}
        </div>
      </header>

      <section className="features-grid">
        <div className="feature-card">
          <h3>✍️ Express Yourself</h3>
          <p>Draft articles effortlessly with standard markdown support and simple layout features.</p>
        </div>
        <div className="feature-card">
          <h3>💬 Connect & Discuss</h3>
          <p>Engage with registered readers through interactive post discussions and comments.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Fast & Accessible</h3>
          <p>Optimized for desktop and mobile so your content looks great everywhere.</p>
        </div>
      </section>
    </div>
  );
};