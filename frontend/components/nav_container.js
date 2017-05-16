import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';
import  Nav from './nav';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});


export default connect(mapStateToProps, mapDispatchToProps)(Nav)
