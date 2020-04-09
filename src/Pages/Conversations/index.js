import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import NewConvoForm from './NewConvoForm';
import AuthRedirect from '../../Components/AuthRedirect';

export default function Conversations() {
  const convos = useSelector((state) => state.conversations);
  const user = useSelector((state) => state.user);
  // function handleNewConvo({ conversation }) {
  //   console.log('AC working hoooooooes =====> ', conversation);
  //   dispatch(convoActions.newConvoAction(conversation));
  // }

  function renderConversations() {
    if (convos.length) {
      return convos.map((convo) => {
        return (
          <Link to={`/conversations/${convo.id}`} key={convo.id}>
            {convo.title}
          </Link>
        );
      });
    } else {
      return null;
    }
  }

  return (
    <div className="conversations-list">
      {user.id ? <NewConvoForm /> : <AuthRedirect />}
      <h2>Conversations</h2>
      <ul className="conversations-ul">{renderConversations()}</ul>
    </div>
  );
}

// function NewConvoForm() {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(convoActions.createConversationToAPI(title));
//   }
//   return (
//     <div className="new-conversation-form">
//       <form className="new-convo-form" onSubmit={handleSubmit}>
//         <h2>Create New Conversation</h2>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           className="submit-button"
//           type="submit"
//           value="Create New Conversation"
//         />
//       </form>
//     </div>
//   );
// }
