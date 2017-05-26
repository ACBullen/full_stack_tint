import * as APIUtilP from '../util/post_api_util';
import { receiveUsers, addUsers, receiveUser } from './user_actions';


export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const REMOVE_POST = "REMOVE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";
export const REMOVE_POST_LIKE = "REMOVE_POST_LIKE";

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

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const addPostLike = like => ({
  type: ADD_POST_LIKE,
  like
})

export const removePostLike = like =>({
  type: REMOVE_POST_LIKE,
  like
})

export const createPost = post => dispatch => {
  return APIUtilP.newPost(post).then(
    (res) => {
      dispatch(receivePostErrors({}));
      return dispatch(receivePost(res.post));
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

export const updatePost = (post_id, post) => dispatch => {
  return APIUtilP.updatePost(post_id, post).then((res)=> {
    return dispatch(receivePost(res.post))
  },
  err => dispatch(receivePostErrors(err))
  )
}

export const deletePost = post_id => dispatch => {
  return APIUtilP.deletePost(post_id).then((res)=>{
    return dispatch(removePost(res.post));
  })
}

export const likePost = post_id => dispatch => {
  return APIUtilP.likePost(post_id).then((res)=>{
    return dispatch(addPostLike(res));
  })
}

export const unlikePost = post_id => dispatch => {
  return APIUtilP.unlikePost(post_id).then((res)=>{
    return dispatch(removePostLike(res));
  })
}

export const getAPost = post_id => dispatch => {

  return APIUtilP.fetchPost(post_id).then((res)=>{
    dispatch(receiveUser(res.user))
    return dispatch(receivePost(res.post))
  },
  err => {

    return dispatch(receivePostErrors(err))
  }
)
}
