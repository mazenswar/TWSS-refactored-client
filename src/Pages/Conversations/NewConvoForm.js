import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import convoActions from '../../Redux/Actions/conversationActions';

function NewConvoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(convoActions.createConversationToAPI(title));
  }
  return (
    <div className="new-conversation-form">
      <form className="new-convo-form" onSubmit={handleSubmit}>
        <h2>Create New Conversation</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="submit-button"
          type="submit"
          value="Create New Conversation"
        />
      </form>
    </div>
  );
}

export default NewConvoForm;
