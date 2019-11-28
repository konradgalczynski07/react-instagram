import axios from 'axios';

import { GET_FEED, FEED_LOADING } from './types';

export const getUserFeed = () => dispatch => {
  dispatch(setFeedLoading());
  axios
    .get('http://localhost:8000/api/posts/feed/')
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

export const getLatestPosts = () => dispatch => {
  dispatch(setFeedLoading());
  axios
    .get('http://localhost:8000/api/posts/')
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
