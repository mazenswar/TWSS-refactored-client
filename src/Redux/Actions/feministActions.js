import API from '../../API_CONSTANTS';
export default () => dispatch => {
  fetch(API.FEM_URL)
    .then(r => r.json())
    .then(feminists => {
      dispatch({
        type: 'SET_FEMINISTS',
        payload: feminists
      });
    });
};
