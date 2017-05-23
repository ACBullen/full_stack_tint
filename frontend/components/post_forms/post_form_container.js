import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

import { requestCloudinaryKeys } from '../../actions/api_key_actions';
import { updatePost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  userId: state.currentUser.id,
  apiKeys: state.apiKeys,
});

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  requestCloudinaryKeys: () => dispatch(requestCloudinaryKeys()),
  updatePost: (post_id, post) => dispatch(updatePost(post_id, post))

});

export default connect(mapStateToProps, mapDispatchToProps);
