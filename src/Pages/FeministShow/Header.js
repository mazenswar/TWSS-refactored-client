import React from 'react';

export default function Header({ feminist }) {
  return (
    <div className="header">
      <img className="header-image" src={feminist.index_img} alt="" />
      <h1>{feminist.name}</h1>
      <div className="header-links">
        <a href="#bio">Bio</a>

        <a href="#quotes">Quotes</a>
      </div>
    </div>
  );
}
