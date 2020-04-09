import React from 'react';

export default function Quotes({ feminist }) {
  function renderQuotes() {
    return feminist.quotes.map((q, i) => (
      <div
        key={`${feminist.name}-quote-${i}`}
        className={`quote quote${i + 1}`}
      >
        <p className="quote-text">{q.content}</p>
        <p>- Source</p>
      </div>
    ));
  }
  return (
    <>
      <h2 id="quotes">What She Said</h2>
      <div className="quotes-container">{renderQuotes()}</div>
    </>
  );
}
