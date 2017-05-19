import { connect } from 'react-redux';
import PostBase from './post_base';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  post: ownProps.post
});

export default connect(mapStateToProps)(PostBase);
