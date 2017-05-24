import { merge } from 'lodash';
import {
        RECEIVE_POSTS,
        RECEIVE_POST,
        ADD_POSTS,
        REMOVE_POST,
        ADD_POST_LIKE,
        REMOVE_POST_LIKE
       } from '../actions/post_actions';

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
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState
    case ADD_POST_LIKE:
      console.log(newState[action.like.post_id].likes);
      newState[action.like.post_id].likes.push(action.like.user_id);
      console.log(newState[action.like.post_id].likes);
      return newState;
    case REMOVE_POST_LIKE:
      let remove_idx = newState[action.like.post_id].likes.indexOf(action.like.user_id)
      if (remove_idx > -1){
        newState[action.like.post_id].likes = newState[action.like.post_id].likes.slice(0, remove_idx).concat(newState[action.like.post_id].likes.slice(remove_idx + 1))
      }
      return newState;
    default:
      return state
  }
};

export default PostReducer;
