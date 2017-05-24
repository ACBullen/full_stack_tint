import React from 'react';
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded';
import {values} from 'lodash';
import PostContainer from './post_bases/post_container';

class Feed extends React.Component {
  constructor(props){
    super(props);

    this.state = {posts: values(this.props.posts)}
  }

  componentWillMount() {
    this.props.getPosts()
  }
  componentWillReceiveProps(newProps){
    if (values(newProps.posts) != this.state.posts){
    this.setState({posts: values(newProps.posts)});}

  }
  componentDidUpdate(){

    let feed = document.getElementById('FeedFootprint');
    let msnry = new Masonry(feed, {
    itemSelector: '.feed-item',
    columnWidth: 5,
    horizontalOrder: true,
    isFitWidth: true,
    stagger: 30
    })

    imagesLoaded(feed, ()=>{

      msnry.layout()
    });

  }

  render(){
    let currentFeed = this.state.posts.sort((a,b)=> b.id - a.id)
    return (
      <div id="FeedFootprint">
        {currentFeed.map((post, idx)=> (
          <PostContainer post={post} key={idx} fi="true" />
        ))}
      </div>
    )
  }
}

export default Feed;
