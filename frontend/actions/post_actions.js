import * as APIUtilP from '../util/post_api_util';
import { receiveUsers, addUsers } from './user_actions';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS"

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => {
  return{
  type: RECEIVE_POSTS,
  posts
}};

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors
});

export const createPost = post => dispatch => {
  return APIUtilP.newPost(post).then(
    (res) => {
      dispatch(receivePostErrors({}));
      return dispatch(receivePost(res));
    },
    (err) => dispatch(receivePostErrors(err))
  )
};

export const getPosts = () => dispatch => {
  return APIUtilP.fetchPosts().then(
    (res) => {
      dispatch(receiveUsers(res.users))
      return dispatch(receivePosts(res.posts))
      },
    (err) => dispatch(receivePostErrors(err))
  )
};

export const getMyPosts = () => dispatch => {
  return APIUtilP.fetchMyPosts().then((res) => {
      dispatch(addUsers(res.users))
      return dispatch(receivePosts(res.posts))
    },
    (err) => dispatch(receivePostErrors(err))
  )
};
