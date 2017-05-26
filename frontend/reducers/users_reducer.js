import { merge } from 'lodash';
import { RECEIVE_USERS, ADD_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_USERS:
    newState = merge(newState, action.users)
    return newState;
    case ADD_USERS:
    newState = merge(newState, action.users);
    return newState;
    case RECEIVE_USER:
    newState[action.user.id] = action.user
    return newState;
    case RECEIVE_CURRENT_USER:
    newState[action.currentUser.id] = action.currentUser;
    return newState;
    default:
    return state;
  }
}

export default UsersReducer;
