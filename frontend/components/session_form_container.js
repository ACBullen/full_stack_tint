import { connect } from 'react-redux';
import { logIn, signUp } from '../actions/session_actions';

import SessionForm from './session_form'


const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user)),
  signUp: user => dispatch(signUp(user))
});

export default connect(null, mapDispatchToProps)(SessionForm);
