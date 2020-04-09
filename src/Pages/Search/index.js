import React, { useState, useEffect } from 'react';
import { list } from './helpers';

export default function Search() {
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  // Functions
  function fetchData() {
    fetch('http://localhost:3000/search')
      .then((r) => r.json())
      .then(setData);
  }
  // Lifecycle
  useEffect(fetchData, []);
  const results = list(data, searchTerm);
  return (
    <main id="search-page">
      <h1>Search</h1>
      <p> {results.length} Results Found</p>
      <input
        className="search-input"
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-results">{results}</div>
    </main>
  );

  //   return <div>{list(data, searchTerm)}</div>;
}
