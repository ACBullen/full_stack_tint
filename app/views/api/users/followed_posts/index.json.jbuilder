json.set! "posts" do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'views/api/posts/post', post: post
    end
  end
end

json.set! "users" do
   @posts.each do |post|
     json.set! post.user.id do
       json.partial! 'views/api/users/user', user: post.user
     end
   end
end
