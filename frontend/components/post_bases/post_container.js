import { connect } from 'react-redux';
import PostBase from './post_base';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  users: state.users,
  post: ownProps.post
});

export default connect(mapStateToProps)(PostBase);
