import { merge } from 'lodash';
import { RECEIVE_USERS, ADD_USERS } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:

    return action.users;
    case ADD_USERS:
    let newState = Object.assign({}, state, action.users)

    return newState
    default:
    return state;
  }
}

export default UsersReducer;
