# T.I.N.T.: This is not Tumblr

[T.I.N.T.](https://tintapp.herokuapp.com/#/home)

T.I.N.T. is a micro-blogging platform app in the vein of Tumblr, with
similar core functionality and a few re-skinning twists. The back-end
foundation consists of the Rails framework with a Postgresql database,
and the frontend is built with the React-Redux implementation of the
flux coding paradigm.

## Key Features and implementation

### Posts

One of the key features of Tumblr implemented here is the use of kinds
of post with differential displays for each kind. Since a lot of the
core functionality of a post is shared across all kinds of posts (ie.
has a `user_id`, some form of text content, probably a piece of media),
a single post table contains all of the data for the various posts,
which are then differentiated with an entry in the `post_type` column.
As the text style of post in Tumblr, also has the ability to contain
various media types, a `media_type` column is implemented to differentially
render whichever kind of media is has been input by the user. This allows
for a media switcher function to process what link or media attached to a
post is meant to be displayed as:

```javascript
mediaSwitcher(){
  switch (this.props.post.media_type) {
    case "image":

      return (
        <img id="media" src={this.props.post.media_link} />
      )
    case "video":
      return (this.props.post.media_link.indexOf('youtube') > -1 ) ? (
        <iframe id="media" src={this.props.post.media_link} allowFullScreen></iframe>
      ) : (
          <video id="media" controls>
            <source src={this.props.post.media_link} />
          </video>
      )
    case "audio":
      return (
        <audio  controls src={this.props.post.media_link}  />
      )
    default:
    return "";
  }
}```

It is also worth noting that having a single set of information common to
all post types allows for a single container to hold all of the necessary
information from the store which can then be passed via a base post
element to the correct type of React component for the type of post, allowing
for a modular structure that can accommodate additional post types or
modification of existing structures more easily than separate containers
and components for every possible post type. Similarly, all post forms
receive their props from their own universal container, and switch between
create vs. edit properties based on the url location from which they render.

### Home Feed

The home feed consists of a series of reduced-sized posts ordered into columns
by a bricks.js masonry layout. The plugin allows you to specify the number
of columns to be displayed at various breakpoints of screen width and
dynamically adjust the display as elements are added or as screen dimensions change.

![columns appear and disappear dynamically as screen resizes)](/docs/wireframes/bricksResize2.gif)

### Current User Feed

The current user feed by contrast shows only posts from users followed
by the current user at a greater size. Follows are stored in their own
join table relating a follwer and followee. In the event a user unfollows
a user from their feed page, that user's posts are immediately removed
from the feed and on subsequent visits are not added to the feed.

![unfollowed users' posts are dynamically removed](/docs/wireframes/userFeed.gif)

## Future Features

Below are the next steps in further implementing Tumblr-esque functionality:

### Reblogs

Another iconic feature of Tumblr is the ability to repost and comment on
other individuals posts, maintaining attribution to the original user.

### User Blogs

Tumblr also has the ability to view blogs by individual users, featuring
their posts and reblogs.

### Post page

Post page would show the content of the post in question as well as listicle
the users who have liked or reblogged the post.

### Infinite scroll

Allow the home and user feeds to hold an initial count of posts and then
fetch more as the user approaches the bottom of the list.
