import { merge } from 'lodash';
import {RECIEVE_CLOUDINARY_KEYS} from '../actions/api_key_actions';

const APIKeyReducer = (state={}, action) =>{
  Object.freeze(state);

  switch (action.type) {
    case RECIEVE_CLOUDINARY_KEYS:
      let newState = merge({}, state);
      newState.cloudinary_options = action.cloudinary_keys;

      return newState;
    default:
      return state
  }
}

export default APIKeyReducer;
