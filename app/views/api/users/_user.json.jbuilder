json.extract! user, :username, :id, :profile_pic
json.set! :follows do
  followed_ids = []
  user.followed_users.each do |followed_user|
    followed_ids.push(followed_user.id)
  end
  json.array! followed_ids
end
