
export const newPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  })
}

export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
}

export const fetchMyPosts = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/users/0/followed_posts"
  })
}

export const likePost = (post_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",

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
