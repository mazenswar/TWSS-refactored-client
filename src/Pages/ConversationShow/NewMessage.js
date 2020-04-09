import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import messageActions from '../../Redux/Actions/messageActions';

export default function NewMessage() {
  const { id } = useParams();
  const [text, setText] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    let data = { text: text, conversation_id: id };
    messageActions.createMessageToAPI(data);
    setText('');
  }

  return (
    <div className="newMessageForm">
      <form onSubmit={handleSubmit}>
        <br />
        <input
          className="new-message"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
