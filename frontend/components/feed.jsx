import React from 'react';
import Bricks from 'bricks.js'
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

  componentDidMount() {
    let sizes = [
      {columns: 1, gutter: 10 },
      { mq: "600px", columns: 2, gutter: 10 },
      { mq: '845px', columns: 3, gutter: 10 },
      { mq: '1100px', columns: 4, gutter: 10 },
      { mq: "1400px", columns: 5, gutter: 10 }
    ]
    let feed = document.getElementById('FeedFootprint')
    console.log(feed);
    this.instance = Bricks({
      container: feed,
      packed: 'packed',
      sizes: sizes,
      position: true
    })

    this.instance.pack();
    this.instance.resize(true);
    imagesLoaded(feed, () => this.instance.pack());
  }

  componentWillReceiveProps(newProps){
  this.setState({posts: values(newProps.posts)});
  }

  componentDidUpdate(){
    let feed = document.getElementById("FeedFootprint");
    this.instance.pack();
    imagesLoaded(feed, () => this.instance.pack());
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
