import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import UsersReducer from './users_reducer';
import PostReducer from './post_reducer';


const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer,
  users: UsersReducer,
  posts: PostReducer
});

export default RootReducer;
