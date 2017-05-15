# T.I.N.T. (This Is Not Tumblr)

[T.I.N.T live version](http://this_isnt_online_yet.com)

## Minimum Viable Project

T.I.N.T. is a micro-blogging platform in the vein of Tumblr where users can make and view blog posts in a convenient and easy-to-use format, built using Ruby onRails and React/Redux. By 5/26 this app will have the following features implemented with smooth, bug-free navigation and CSS styling appropriate to a Tumblr clone.

   - Heroku hosting
   - User Sign-up/-in
   - Forms for various types of posts
   - Content Feed
   - Follows
   - Likes
   - Production README

### Design Docs
  * [View Wireframes](wireframes)
  * [Component Hierarchy](component-hierarchy.md)
  * [API endpoints](api-endpoints.md)
  * [DB schema](schema.md)
  * [Sample State](sample-state.md)

## Implementation Timeline
 0. Backend setup and Front End User Authentication (2 days)
  - objective: Functioning auth pattern, front and backend, with operational database and initial views.
 0. Post submission forms(2-3 days)
  - objective: Forms and submission support for various kinds of posts: text, image, video, etc.
 0. Content feed (2 days)
  - objective: smooth running feed of posts sorted by creation date.
 0. Follows (1 day)
  - objective: Users able to follow other users, enabling them to see followed users' content as part of their feed.
 0. Likes (1 day)
  - objective: Users able to mark a post as liked(and remove likes). Post likes should be viewable.

### Bonus
  - Reblogs
  - User show page
  - Tags(?)
