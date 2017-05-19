import { connect } from 'react-redux';
import { logIn, signUp, receiveSessionErrors } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: (state.currentUser.username ? true : false),
  errors: state.errors.session_errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => (ownProps.location.pathname === '/login' ?
     dispatch(logIn(user)) :  dispatch(signUp(user))
  ),
  demoSignIn: () => (dispatch(logIn({username: 'Demo', password: 'password'}))),
  clearErrors: () => dispatch(receiveSessionErrors({}))

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
