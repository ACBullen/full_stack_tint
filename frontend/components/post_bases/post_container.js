import { connect } from 'react-redux';
import PostBase from './post_base';
import { deletePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  users: state.users,
  post: ownProps.post,
  fi: ownProps.fi
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePost: (post_id) => dispatch(deletePost(post_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostBase);
