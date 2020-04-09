import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchFeminists from './Redux/Actions/feministActions';
import postActions from './Redux/Actions/postActions';
import userActions from './Redux/Actions/userActions';
import Pages from './Pages';
import conversationActions from './Redux/Actions/conversationActions';
import { ActionCableConsumer } from 'react-actioncable-provider';
import Cable from './Components/Cable';

function App() {
  const dispatch = useDispatch();

  function handleNewConvo({ conversation }) {
    console.log('AC working hoooooooes =====> ', conversation);
    dispatch(conversationActions.newConvoAction(conversation));
  }

  // function handleNewMessage({ message }) {
  //   console.log('AC MESSS working hoooooooes =====> ', message);
  //   // dispatch(messageActions.newConvoAction(message));
  // }

  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUserFromAPI());
    }
    dispatch(conversationActions.getConversationsFromAPI());
    dispatch(fetchFeminists());
    dispatch(postActions.getPostsFromAPI());
  }, [dispatch]);

  return (
    <div className="App">
      <ActionCableConsumer
        channel={{ channel: 'ConversationsChannel' }}
        onReceived={handleNewConvo}
      >
        <Cable />
        <Pages />
      </ActionCableConsumer>
    </div>
  );
}

export default App;
