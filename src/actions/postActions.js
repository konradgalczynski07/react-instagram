import axios from 'axios';

import { GET_ERRORS, GET_POST, POST_LOADING } from './types';
import { getUserFeed } from './feedActions';

// Add Photo
export const addPhoto = (photoData, history) => dispatch => {
  axios
    .post('http://localhost:8000/api/post/', photoData)
    .then(res => history.push('/feed'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  axios
    .post(`http://localhost:8000/api/post/comment/${postId}/`, commentData)
    .then(res => dispatch(getUserFeed()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Toggle Like
export const toggleLike = postId => dispatch => {
  axios
    .get(`http://localhost:8000/api/post/like/${postId}/`)
    .then(res => dispatch(getUserFeed()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// // Set loading state
// export const setPostLoading = () => {
//   return {
//     type: POST_LOADING
//   };
// };
