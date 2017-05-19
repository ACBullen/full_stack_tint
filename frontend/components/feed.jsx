import React from 'react';
import PostContainer from './post_bases/post_container';
import Masonry from 'masonry-layout'
import {values} from 'lodash';

class Feed extends React.Component {
  constructor(props){
    super(props);

    this.state = {posts: values(this.props.posts)}
  }

  componentWillMount() {
    this.props.getPosts()
  }
  componentWillReceiveProps(newProps){
    this.setState({posts: values(newProps.posts)});

  }
  componentDidUpdate(){
    let feed = document.getElementById('FeedFootprint');
    let msnry = new Masonry(feed, {
    columnWidth: 5,
    itemSelector: '.feed-item',
    horizontalOrder: true
    })
    console.log(msnry);
  }

  render(){
    let currentFeed = this.state.posts;
    return (
      <div id="FeedFootprint">
        {currentFeed.map((post, idx)=> (
          <PostContainer post={post} key={idx} />
        ))}
      </div>
    )
  }
}

export default Feed;
