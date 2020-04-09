import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RenderPost from './RenderPost';

export default function Post() {
  let { id } = useParams();
  const post = useSelector((state) =>
    state.posts.find((p) => p.id === parseInt(id))
  );

  // RETURN VALUE
  if (post) {
    return (
      <div className="show-post-container">
        <RenderPost {...post} />
      </div>
    );
  }
  return null;
}
