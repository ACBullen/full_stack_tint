import { merge } from 'lodash';
import { RECEIVE_USERS, ADD_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USERS:
    newState = Object.assign(newState, action.users)
    return newState;
    case ADD_USERS:
    newState = Object.assign(newState, action.users);

    return newState;
    case RECEIVE_CURRENT_USER:
    newState[action.currentUser.id] = action.currentUser;
    return newState;
    default:
    return state;
  }
}

export default UsersReducer;
