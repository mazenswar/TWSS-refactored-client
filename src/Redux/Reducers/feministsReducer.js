export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_FEMINISTS':
      return payload;
    default:
      return state;
  }
};
