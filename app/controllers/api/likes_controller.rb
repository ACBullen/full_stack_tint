class Api::LikesController < ApplicationController

  def create
    p params
    @like = Like.new(user_id: current_user.id,
                     post_id: params[:like][:post_id]
                    )

    if @like.save
      render json: {
        user_id: @like.user_id,
        post_id: @like.post_id
      }
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.where(post_id: params[:like][:post_id])

    @like.destroy_all
    render json: @like.user_id
  end




end
