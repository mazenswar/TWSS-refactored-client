import React from 'react';

export default function Message({ message }) {
  function sentAt(date) {
    let dateString = new Date(date).toDateString();
    let messageTime = new Date(date).toTimeString();
    let timeString = messageTime.split(' ')[0];
    return dateString + ' at: ' + timeString;
  }
  return (
    <li>
      <p className="username">{message.sender}</p>
      <p className="message-content">{message.text}</p>
      <p className="message-time">{sentAt(message.created_at)}</p>
    </li>
  );
}
