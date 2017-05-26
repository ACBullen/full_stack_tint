
json.set! "post" do
  json.partial! 'post', post: @post
end

json.set! "user" do
  json.partial! 'api/users/user', user: @post.user
end
