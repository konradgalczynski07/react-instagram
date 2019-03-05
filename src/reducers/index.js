import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import feedReducer from './feedReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  feed: feedReducer,
  post: postReducer,
  profile: profileReducer,
  errors: errorReducer
});
