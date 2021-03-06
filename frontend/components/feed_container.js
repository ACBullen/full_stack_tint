import { connect } from 'react-redux';
import { getPosts } from '../actions/post_actions';
import Feed from './feed'

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (offset)=> dispatch(getPosts(offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
