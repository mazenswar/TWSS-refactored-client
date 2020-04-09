import React from 'react';

export default function Bio({ bio }) {
  function renderBio() {
    let i = 0;
    let arr = bio.split('BREAK');
    return arr.map(para => <p key={(i += 1)}> {para} </p>);
  }
  return (
    <div className="intro">
      <h2 id="bio">Bio</h2>
      {renderBio()}
    </div>
  );
}
