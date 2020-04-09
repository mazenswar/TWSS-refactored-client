import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from '../../Components/LogoutButton';

export default function Profile() {
  const { profile_img, username, bio, posts } = useSelector(
    (state) => state.user
  );

  function renderPosts() {
    return posts.map(({ id, title, created_at }) => {
      let date = new Date(created_at).toString();
      return (
        <Link key={id} to={`/posts/${id}`} className="posts-links">
          <h4>{title}</h4>
          <p>Posted on: {date}</p>
        </Link>
      );
    });
  }
  return (
    <main id="profile-container">
      <LogoutButton />
      <img className="user-profile-image" src={profile_img} alt={username} />
      <h1>{username}</h1>
      <p>{bio}</p>
      <div className="profile-posts">
        {!posts || !posts.length ? (
          <h2> You have no posts</h2>
        ) : (
          <>
            <h2>
              {username}
              's Posts
            </h2>
            {renderPosts()}
          </>
        )}
      </div>
    </main>
  );
}
