//error handling for sessions/users and posts
import { merge } from 'lodash';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_POST_ERRORS } from '../actions/post_actions';

const ErrorsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState.session_errors = action.errors
      return newState
    case RECEIVE_POST_ERRORS:
      newState.post_errors = action.errors
    default:
      return state;
  }
};

export default ErrorsReducer;
