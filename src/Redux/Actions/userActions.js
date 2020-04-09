import API from '../../API_CONSTANTS';
// ACTION CREATORS
const setUserAction = (user) => ({
  type: 'SET_USER',
  payload: user,
});
export const clearUserAction = () => ({ type: 'CLEAR_USER' });

// const setUserAction = () => ({
//     type: ""
//     payload: ""
// })

// const setUserAction = () => ({
//     type: ""
//     payload: ""
// })

// const setUserAction = () => ({
//     type: ""
//     payload: ""
// })

// const setUserAction = () => ({
//     type: ""
//     payload: ""
// })

// const setUserAction = () => ({
//     type: ""
//     payload: ""
// })

/// FETCH

//////////////////////// PERSIST ////////////////////////
const persistUserFromAPI = () => (dispatch) => {
  fetch(API.PERSIST_URL, {
    headers: {
      ...API.BASE_HEADERS,
      Authorization: 'bearer ' + localStorage.token,
    },
  })
    .then((r) => r.json())
    .then((user) => {
      dispatch(setUserAction(user));
    });
};

//////////////////////// CREATE / LOGIN ////////////////////////

const createOrLoginUserToAPI = (userData, endpoint) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: API.BASE_HEADERS,
    body: JSON.stringify(userData),
  };
  fetch(API.BASE_URL + endpoint, config)
    .then((r) => r.json())
    .then((data) => {
      dispatch(setUserAction(data.user));
      localStorage.token = data.token;
    });
};

//////////////////////// UPDATE ////////////////////////
const updateUserToAPI = (userData) => (dispatch) => {
  const config = {
    method: 'PATCH',
    headers: API.BASE_HEADERS,
    body: JSON.stringify(userData),
  };
  fetch(API.USER_URL(userData.id), config)
    .then((r) => r.json())
    .then((user) => {
      dispatch(setUserAction(user));
    });
};

//////////////////////// DELETE ////////////////////////

const deleteUserFromAPI = (userId) => (dispatch) => {
  const config = {
    method: 'DELETE',
  };
  fetch(API.USER_URL(userId), config).then((r) => {
    if (r.ok) {
      dispatch(clearUserAction());
    } else {
      alert('error deleting your account');
    }
  });
};
//////////////////////// EXPORT ////////////////////////

export default {
  persistUserFromAPI,
  createOrLoginUserToAPI,
  updateUserToAPI,
  deleteUserFromAPI,
};
