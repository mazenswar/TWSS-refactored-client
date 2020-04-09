import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Bio from './Bio';
import Header from './Header';
import Quotes from './Quotes';

export default function Show() {
  const { id } = useParams();
  const feminist = useSelector((state) => {
    return state.feminists.length
      ? state.feminists.find((f) => f.id === parseInt(id))
      : null;
  });

  if (feminist) {
    return (
      <div className="main-container">
        <Header feminist={feminist} />
        <Bio bio={feminist.bio} />
        <Quotes feminist={feminist} />
      </div>
    );
  }
  return null;
}

// <div className="sm-div">
//   <TwitterShareButton url="http://localhost.com">
//     <TwitterIcon round size={100} />
//   </TwitterShareButton>
//   <FacebookShareButton url="http://localhost.com">
//     <FacebookIcon round size={100} />
//   </FacebookShareButton>
//   <RedditShareButton url="http://localhost.com">
//     <RedditIcon round size={100} />
//   </RedditShareButton>
// </div>
