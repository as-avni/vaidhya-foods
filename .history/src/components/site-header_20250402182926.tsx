import React from 'react';
import { Link } from 'react-router-dom';
import './site-header.css';

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="navbar">
        <button className="menu-button" aria-label="Menu">
          <span className="hamburger-icon"></span>
        </button>
        <div className="logo-container">
          <Link to="/" className="logo">Logo</Link>
        </div>
        <div className="social-media-icons desktop-only">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
