import { GET_FEED, FEED_LOADING } from '../actions/types';

const initialState = {
  feed: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FEED_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FEED:
      return {
        ...state,
        feed: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
