class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followee_id: params[:follow][:followee_id], follower_id: current_user.id)

    if @follow.save
      render json: params[:follow][:followee_id]
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = current_user.follows.where(followee_id: params[:follow][:followee_id])
    @follow.each { |follow| follow.destroy }
    render json: params[:follow][:followee_id]
  end

end
