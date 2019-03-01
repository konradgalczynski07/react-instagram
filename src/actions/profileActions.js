import axios from 'axios';

import { GET_ERRORS, GET_FEED, FEED_LOADING } from './types';

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

export const getUserFeed = () => dispatch => {
  dispatch(setFeedLoading());
  axios
    .get('http://localhost:8000/api/post/feed/')
    .then(res =>
      dispatch({
        type: GET_FEED,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FEED,
        payload: {}
      })
    );
};

// Profile loading
export const setFeedLoading = () => {
  return {
    type: FEED_LOADING
  };
};
