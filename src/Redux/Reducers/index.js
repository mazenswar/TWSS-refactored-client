import { combineReducers } from 'redux';

import conversations from './conversationsReducer';
import user from './usersReducer';
import feminists from './feministsReducer';
import posts from './postsReducer';

export default combineReducers({
  conversations,
  user,
  feminists,
  posts
});
