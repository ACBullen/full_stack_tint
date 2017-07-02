import { connect } from 'react-redux';
import { getPosts } from '../actions/post_actions';
import Feed from './feed'

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (lastIdx)=> dispatch(getPosts(lastIdx))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
