const BASE_URL = 'http://localhost:3000';
const WS_BASE = 'ws://localhost:3000/cable';
const FEM_URL = BASE_URL + '/feminists';
const POSTS_URL = BASE_URL + '/posts';
const POST_URL = (id) => POSTS_URL + '/' + id;
const USERS_URL = BASE_URL + '/users';
const USER_URL = (id) => USERS_URL + '/' + id;
const PERSIST_URL = BASE_URL + '/auth';
const LOGIN_URL = BASE_URL + '/login';
const CONVOS_URL = BASE_URL + '/conversations';
const MESSAGES_URL = BASE_URL + '/messages';
const BASE_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export default {
  WS_BASE,
  BASE_URL,
  FEM_URL,
  POSTS_URL,
  POST_URL,
  USERS_URL,
  USER_URL,
  PERSIST_URL,
  LOGIN_URL,
  CONVOS_URL,
  MESSAGES_URL,
  BASE_HEADERS,
};
