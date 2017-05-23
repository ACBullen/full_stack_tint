class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user).order(:created_at)
    render :index
  end


  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    render :show
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
