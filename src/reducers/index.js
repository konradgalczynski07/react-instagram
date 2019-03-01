import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import feedReducer from './feedReduer';

export default combineReducers({
  auth: authReducer,
  feed: feedReducer,
  errors: errorReducer
});
