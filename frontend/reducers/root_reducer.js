import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PostReducer from './post_reducer';


const RootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorsReducer,
  posts: PostReducer
});

export default RootReducer;
