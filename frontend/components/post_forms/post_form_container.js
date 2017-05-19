import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

import { requestCloudinaryKeys } from '../../actions/api_key_actions';

const mapStateToProps = state => ({
  userId: state.currentUser.id,
  apiKeys: state.apiKeys
});

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  requestCloudinaryKeys: () => dispatch(requestCloudinaryKeys())
git 
});

export default connect(mapStateToProps, mapDispatchToProps);
