class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user).order(:created_at)
    render :index
  end

  
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: { id: @post.id,
                     post_type: @post.post_type,
                     user_id: @post.user_id,
                     title: @post.title,
                     body: @post.body,
                     link_url: @post.link_url,
                     media_link: @post.media_link,
                     created_at: @post.created_at
                    }
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
