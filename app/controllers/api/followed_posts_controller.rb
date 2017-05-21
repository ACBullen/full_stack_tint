class Api::FollowedPostsController < ApplicationController
  def index
    @posts = Post.where(user: current_user.followed_users)
    render :index
  end
end
