import React, { useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewMessage from './NewMessage';
import Message from './Message';
import AuthRedirect from '../../Components/AuthRedirect';

export default function ConversationShow() {
  // Variables
  const { id } = useParams();
  const convos = useSelector((state) => state.conversations);
  const convo = convos.find((c) => c.id === parseInt(id));
  const user = useSelector((state) => state.user);
  //////////////////////////////////////////////////////

  const messagesUlRef = useCallback(
    (node) => {
      if (node !== null) {
        node.scrollTop = node.scrollHeight;
      }
    },
    [convos]
  );

  /// Methods
  function renderMessages() {
    if (convo.messages.length) {
      return convo.messages.map((message) => (
        <Message key={message.id} message={message} />
      ));
    }
    return <h2>There are no messages yet</h2>;
  }
  /// Return

  if (convo) {
    return (
      <div className="messages-area">
        <h2>{convo.title}</h2>
        <ul ref={messagesUlRef}>{renderMessages()}</ul>
        {user.id ? <NewMessage /> : <AuthRedirect />}
      </div>
    );
  }
  return null;
}
