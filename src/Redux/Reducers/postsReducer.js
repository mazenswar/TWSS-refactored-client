export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_POSTS':
      return payload.reverse();
    case 'CREATE_POST':
      return [payload, ...state];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== payload);
    case 'UPDATE_POST':
      return updatePost(state, payload);
    default:
      return state;
  }
};

// HELPERS

function updatePost(posts, updatedPost) {
  return posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
}
