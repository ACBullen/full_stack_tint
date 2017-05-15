import * as APIUtilS from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) =>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) =>({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logIn = (user) => dispatch =>{
  return APIUtilS.logIn(user).then(
    (res)=>(dispatch(receiveCurrentUser(user))),
    (err) => (dispatch(receiveSessionErrors(err)))
  );
};

export const signUp = user => dispatch =>{
  return APIUtilS.signUp(user).then(
    (res) => (dispatch(receiveCurrentUser(user))),
    (err) => (dispatch(receiveSessionErrors(err)))
  );
};
