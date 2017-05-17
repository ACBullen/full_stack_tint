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
