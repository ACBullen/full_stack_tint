
export const newPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  })
}

export const fetchPosts = (lastIdx) => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
    data: {last_idx: lastIdx}
  })
}

export const fetchMyPosts = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/users/0/followed_posts"
  })
}

export const fetchPost = (post_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${post_id}`
  })
}

export const likePost = (post_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: {like: {post_id}}
  })
}

export const unlikePost = post_id =>{
  return $.ajax({
    method: "DELETE",
    url: "/api/likes",
    data: {like: {post_id}}
  })
}

export const updatePost = (post_id, post) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post_id}`,
    data: {post}
  })
}

export const deletePost = (post_id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/posts/${post_id}`
  })
}
