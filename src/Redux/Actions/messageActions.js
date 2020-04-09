import API from '../../API_CONSTANTS';

const createMessageToAPI = (data) => {
  const config = {
    method: 'POST',
    headers: {
      ...API.BASE_HEADERS,
      Authorization: 'bearer ' + localStorage.token,
    },
    body: JSON.stringify(data),
  };
  fetch(API.MESSAGES_URL, config);
};

export default {
  createMessageToAPI,
};
