import { connect } from 'react-redux';
import { getMyPosts } from '../actions/post_actions';
import UserFeed from './user_feed';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  posts: state.posts

});

const mapDispatchToProps = (dispatch) => ({
  getMyPosts: () => dispatch(getMyPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFeed);
