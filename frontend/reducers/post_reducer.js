import { merge } from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

const PostReducer = (state = {}, action) {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState = action.posts;
      return newState;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    default:
      return state
  }
}

export default PostReducer;
