class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user)
                  .order(created_at: :desc)
                  .limit(10)
                  .offset(fetch_post_params[:last_idx])
    render :index
  end


  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      p @post.errors.full_messages
      render json: @post.errors.full_messages
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(post_params)
      render :show
    else
      p @post.errors.full_messages
      render json: @post.errors.full_messages
    end
  end

  def show
    @post = Post.find(params[:id])

    if @post
      render :show
    else
      render json: "Post not found", status: 404
    end
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
    render :show
  end

  private

  def fetch_post_params
    params.permit(:last_idx)
  end

  def post_params
    params.require(:post).permit(:post_type,
                                 :title,
                                 :body,
                                 :user_id,
                                 :link_url,
                                 :media_link,
                                 :media_type,
                                 :user_id,
                                 :original_auth_id,
                                 :rb_post_id,
                                 :comments
                                )

  end
end
