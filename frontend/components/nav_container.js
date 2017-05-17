import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '../actions/session_actions';
import  Nav from './nav';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
