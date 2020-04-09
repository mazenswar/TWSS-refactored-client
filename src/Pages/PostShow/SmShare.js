import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postActions from '../../Redux/Actions/postActions';

import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
} from 'react-share';

export default function SmShare() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const user = useSelector((state) => state.user);
  const liked = useSelector((state) => {
    const post = state.posts.find((p) => p.id === parseInt(id));
    return post.likes.find((l) => l.user_id === state.user.id);
  });

  function handleLike() {
    dispatch(postActions.handleLikeToAPI(id));
  }
  const icon = liked ? (
    <svg
      onClick={handleLike}
      className="like-icon"
      fill={'red'}
      enableBackground="new 0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
    </svg>
  ) : (
    <svg
      onClick={handleLike}
      className="like-icon"
      fill={'white'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
    </svg>
  );
  return (
    <div className="sm-div">
      {user.id ? <div className="likes-div">{icon}</div> : null}
      <TwitterShareButton url={window.location.href}>
        <TwitterIcon round size={50} />
      </TwitterShareButton>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon round size={50} />
      </FacebookShareButton>
      <RedditShareButton url={window.location.href}>
        <RedditIcon round size={50} />
      </RedditShareButton>
    </div>
  );
}
