import * as APIUtilsF from '../util/follow_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";
export const ADD_USERS = "ADD_USERS"



export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const followUser = (followee_id) => ({
  type: FOLLOW_USER,
  followee_id
});

export const unfollowUser = (followee_id) => ({
  type: UNFOLLOW_USER,
  followee_id
});

export const followErrors = (errors) => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const addUsers = (users) => ({
  type: ADD_USERS,
  users
})


export const createFollow = (followee_id) => dispatch => {
  return APIUtilsF.followUser(followee_id).then(
    (res)=> dispatch(followUser(res)),
    (err)=> dispatch(followErrors(err))
  )
};

export const destroyFollow = (followee_id) => dispatch => {
  return APIUtilsF.unfollowUser(followee_id).then(
    (res) => dispatch(unfollowUser(res)),
    (err) => dispatch(followErrors(err))
  )
}
