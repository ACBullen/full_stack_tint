class Api::FollowedPostsController < ApplicationController
  def index
    @posts = Post.where(user: current_user.followed_users.push(current_user.id))

    render :index
  end
end
