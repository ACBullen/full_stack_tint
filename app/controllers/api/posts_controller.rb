class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.order(:created_at).include(:user)
    render :index
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: :post
    else
      render json: @post.errors.full_messages
    end
  end

  private

  def post_params
    params.require(:post).permit(:post_type,
                                 :title,
                                 :body,
                                 :user_id,
                                 :link_url,
                                 :media_link,
                                 :user_id
                                )

  end
end
