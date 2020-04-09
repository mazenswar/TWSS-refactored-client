import React from 'react';
import ICONS from '../../Assets/Icons';
import { Link } from 'react-router-dom';

export default function Links({ user }) {
  return (
    <div className="nav-links">
      <Link to="/">
        <img src={ICONS.home} className="navbar-icons" alt="home-icon" />
        Home
      </Link>
      <Link to="/feminists">
        <img src={ICONS.fist} className="navbar-icons" alt="fist-icon" />
        Feminists
      </Link>{' '}
      <Link to="/conversations">
        <img src={ICONS.message} className="navbar-icons" alt="message-icon" />
        Messages
      </Link>
      <Link to="/posts">
        <img src={ICONS.posts} className="navbar-icons" alt="posts-icon" />
        Posts
      </Link>
      {user.id ? (
        <Link to="/posts/new">
          <img
            src={ICONS.newPost}
            className="navbar-icons"
            alt="new-post-icon"
          />{' '}
          New Post
        </Link>
      ) : null}
      <Link to="/search">
        <img src={ICONS.search} className="navbar-icons" alt="search-icon" />
        Search
      </Link>
    </div>
  );
}
