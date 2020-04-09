import API from '../../API_CONSTANTS';

const setConversationsAction = (conversations) => ({
  type: 'SET_CONVOS',
  payload: conversations,
});

// CONVERSATIONS

const getConversationsFromAPI = () => (dispatch) =>
  fetch(API.CONVOS_URL)
    .then((r) => r.json())
    .then((data) => {
      dispatch(setConversationsAction(data));
    });

/////////////////// CREATE /////////////////////////////

const newConvoAction = (convo) => ({
  type: 'NEW_CONVO',
  payload: convo,
});
const createConversationToAPI = (title) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      ...API.BASE_HEADERS,
      Authorization: 'bearer ' + localStorage.token,
    },
    body: JSON.stringify({
      title,
    }),
  };
  fetch(API.CONVOS_URL, config);
};

// const deleteConversationFromAPI = conversation => dispatch =>
//   fetch('http://localhost:4000/conversations', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json'
//     },
//     body: JSON.stringify(conversation)
//   }).then(dispatch(deleteConversationFromDBAction(conversation)));

// MESSAGES

// const createMessageToAPI = message => dispatch =>
//   fetch('http://localhost:4000/messages', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json'
//     },
//     body: JSON.stringify(message)
//   });

// const deleteMessageFromAPI = message => dispatch =>
//   fetch('http://localhost:4000/messages', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accepts: 'application/json'
//     },
//     body: JSON.stringify(message)
//   });

export default {
  getConversationsFromAPI,
  createConversationToAPI,
  newConvoAction,
};
