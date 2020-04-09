import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = useSelector((state) => state.posts.reverse());
  const filteredPosts = posts.filter(
    ({ title, content, author }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function renderPosts() {
    return filteredPosts.map(
      ({ created_at, id, author, author_img, title }) => {
        let date = new Date(created_at);
        return (
          <Link key={id} to={`/posts/${id}`} className="all-posts-links">
            <h4>{title}</h4>
            <div className="poster-info-div">
              <img src={author_img} alt={author} />
              <h5>By {author}</h5>
            </div>
            <p>Posted on: {date.toString()}</p>
          </Link>
        );
      }
    );
  }

  return (
    <>
      <div className="search-container">
        <h1>Search Posts</h1>
        <input
          className="search-input"
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="all-posts-container">
        <h1>Posts</h1>
        {posts.length ? renderPosts() : 'There are no posts yet...'}
      </div>
    </>
  );
}
