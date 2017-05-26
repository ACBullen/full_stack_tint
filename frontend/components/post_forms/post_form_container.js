import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';

import { requestCloudinaryKeys } from '../../actions/api_key_actions';
import { updatePost, getAPost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  let post;
  if (ownProps.match.params.id) {
    post = state.posts[ownProps.match.params.id]
  }
  return {
  userId: state.currentUser.id,
  currentUser: state.currentUser,
  apiKeys: state.apiKeys,
  post: post,
  errors: state.errors.post_errors
}};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
  requestCloudinaryKeys: () => dispatch(requestCloudinaryKeys()),
  updatePost: (post_id, post) => dispatch(updatePost(post_id, post)),
  getAPost: (post_id) => dispatch(getAPost(post_id))

});

export default connect(mapStateToProps, mapDispatchToProps);
