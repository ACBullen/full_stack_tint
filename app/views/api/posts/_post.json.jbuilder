likes = []
post.liking_users.each do |user|
  likes.push(user.id)
end


json.extract! post, :id, :post_type, :user_id, :title, :body, :link_url, :media_link, :media_type, :original_auth_id, :rb_post_id, :comments
json.set! "likes" do
  json.array! likes
end
