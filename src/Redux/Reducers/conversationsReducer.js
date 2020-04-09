export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_CONVOS':
      return payload;
    case 'NEW_CONVO':
      return [payload, ...state];
    case 'DELETE_CONVERSATION':
      return state.filter((conversation) => conversation !== payload);
    case 'NEW_MESSAGE':
      return updateMessage(state, payload);
    case 'DELETE_MESSAGE':
      return state;
    default:
      return state;
  }
};

function updateMessage(state, payload) {
  let convos = [...state];
  let convoToUpdate = convos.find((convo) => convo.id === payload.id);
  let updatedConvo = (convoToUpdate.messages = [
    ...convoToUpdate.messages,
    payload.message,
  ]);
  let newList = convos.map((convo) =>
    convo.id === updatedConvo.id ? updatedConvo : convo
  );
  console.log('NEW', newList);
  return newList;
}
