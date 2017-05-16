import { connect } from 'react-redux';
import { logIn, signUp } from '../actions/session_actions';

import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: (state.currentUser.username ? true : false),
  errors: state.errors.session_errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => (ownProps.location.pathname === '/login' ?
     store.dispatch(logIn(user)) :  store.dispatch(signUp(user))
  ),
  demoSignIn: () => (store.dispatch(logIn({username: 'Demo', password: 'password'})))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
