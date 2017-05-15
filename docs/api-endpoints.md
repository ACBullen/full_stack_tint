# API endpoints

## HTML API

### Root
  - `GET /` - loads the base page for React components to key off of.
## JSON API

### Users
  - `POST /api/users`
  - `GET /api/users/:user_id` -
### Session
  - `POST /api/session`
  - `DELETE /api/session`
### Posts
  - `GET /api/posts` - gets all postings from users the current user's follows.
  - `POST /api/posts` - creates a new post in db, table determined by type in params.
  - `GET /api/post/:post_id` - gets a post and its associated likes for display.
### Follow
  - `POST /api/follow/:followee_id`
  - `DELETE /api/follow/:followee_id`
### Like
  - `POST /api/like/:post_id`
  - `DELETE /api/like/:post_id`
