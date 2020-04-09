import React from 'react';
import { Link } from 'react-router-dom';
import SmShare from './SmShare';

export default function RenderPost({
  title,
  content,
  author,
  author_id,
  created_at,
  likes,
}) {
  const formattedDate = new Date(created_at).toString();
  return (
    <>
      <h1 className="show-post-title">{title}</h1>
      <h2>
        By <Link to={`/users/${author_id}`}>{author} </Link>
      </h2>

      <div
        className="show-post-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <SmShare />
      <p className="date-p">Posted at: {formattedDate}</p>
    </>
  );
}
