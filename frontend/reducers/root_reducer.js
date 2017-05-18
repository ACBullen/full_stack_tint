import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UsersReducer from './users_reducer';
import PostReducer from './post_reducer';
import APIKeyReducer from './api_key_reducer';


const RootReducer = combineReducers({
  currentUser: SessionReducer,
  apiKeys: APIKeyReducer,
  errors: ErrorsReducer,
  users: UsersReducer,
  posts: PostReducer
});

export default RootReducer;
