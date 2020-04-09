import API from '../../API_CONSTANTS';
//////////// GET ///////////////
const getPostsAction = (posts) => ({
  type: 'SET_POSTS',
  payload: posts,
});

const getPostsFromAPI = () => (dispatch) =>
  fetch(API.POSTS_URL)
    .then((r) => r.json())
    .then((posts) => {
      dispatch(getPostsAction(posts));
    });

/////////// CREATE ///////////////////////
const createNewPostAction = (post) => ({
  type: 'NEW_POST',
  payload: post,
});
const createPostToAPI = (postData) => (dispatch) =>
  fetch(API.POSTS_URL, {
    method: 'POST',
    headers: {
      ...API.BASE_HEADERS,
      Authorization: 'bearer ' + localStorage.token,
    },
    body: JSON.stringify({
      post: postData,
    }),
  })
    .then((r) => r.json())
    .then((post) => {
      dispatch(createNewPostAction(post));
    });
///////////////////  DELETE ///////////////////////
const deletePostAction = (id) => ({
  type: 'SET_POSTS',
  payload: id,
});
const deletePostFromAPI = (postId) => (dispatch) => {
  const config = {
    method: 'DELETE',
  };
  fetch(API.POST_URL(postId), config).then((r) => {
    if (r.ok) {
      dispatch(deletePostAction(postId));
    } else {
      alert('something went wrong');
    }
  });
};

//////////////// PATCH(LIKES) ////////////////////

const newLikeAction = (post) => ({
  type: 'UPDATE_POST',
  payload: post,
});

const handleLikeToAPI = (post_id) => (dispatch) => {
  const config = {
    method: 'PATCH',
    headers: {
      ...API.BASE_HEADERS,
      Authorization: 'bearer ' + localStorage.token,
    },
  };
  fetch(API.POST_URL(post_id), config)
    .then((r) => r.json())
    .then((post) => {
      dispatch(newLikeAction(post));
    });
};

//////////////// EXPORT ////////////////////
export default {
  getPostsFromAPI,
  createPostToAPI,
  deletePostFromAPI,
  handleLikeToAPI,
};
