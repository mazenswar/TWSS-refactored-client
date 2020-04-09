import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ feminist }) {
  return (
    <Link
      to={`/feminists/${feminist.id}`}
      className="person-card"
      id={feminist.id}
    >
      <img className="index-img" src={feminist.index_img} alt={feminist.name} />
      <h3>{feminist.name}</h3>
    </Link>
  );
}
