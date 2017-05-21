import { merge } from 'lodash';
import { RECEIVE_POSTS, RECEIVE_POST, ADD_POSTS } from '../actions/post_actions';

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_POSTS:
      newState = Object.assign(newState, action.posts);
      return newState;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;
      return newState;
    case ADD_POSTS:
      newState = Object.assign(newState, action.posts);
      return newState;
    default:
      return state
  }
};

export default PostReducer;
