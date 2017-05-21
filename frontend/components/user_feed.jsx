import React from 'react';
import {values} from 'lodash';
import PostContainer from './post_bases/post_container'


class UserFeed extends React.Component {
  constructor(props){
    super(props);

    this.state = {posts: values(this.props.posts)}
  }

  componentWillMount() {
    this.props.getMyPosts()
  }
  componentWillReceiveProps(newProps){

    this.setState({posts: values(newProps.posts)});

  }

  render() {
    let currentFeed =  this.state.posts.sort((a,b)=> b.id - a.id)
    let follows = this.props.currentUser.follows;
    return (
      <dif className="UserFeed">
        {currentFeed.map((post, idx)=> (
          (follows.indexOf(post.user_id)) > -1 ? <PostContainer post={post} key={idx} fi="false" /> : ""
        ))}
      </dif>
    )
  }

}

export default UserFeed;
