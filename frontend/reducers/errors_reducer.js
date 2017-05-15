//error handling for sessions/users and posts
import { merge } from 'lodash';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const ErrorsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      let newState = merge({}, state);
      newState.session_errors = action.session_errors
      return newState
    default:
      return state;
  }
};

export default ErrorsReducer;
