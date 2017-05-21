import { connect } from 'react-redux';
import { getMyPosts }

const mapStateToProps = (state) =({
  currentUser: state.currentUser,
  posts: state.posts,

})
