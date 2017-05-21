import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { FOLLOW_USER, UNFOLLOW_USER } from '../actions/user_actions';

const SessionReducer = (state = {}, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;;
    case FOLLOW_USER:
      newState.follows.push(action.followee_id);
      return newState;
    case UNFOLLOW_USER:
      let remove_idx = newState.follows.indexOf(action.followee_id);
      if (remove_idx >= 0){
        newState.follows = newState.follows.slice(0, remove_idx).concat(newState.follows.slice(remove_idx + 1))
      }
      return newState;
    default:
    return state;
  }
};

export default SessionReducer;
