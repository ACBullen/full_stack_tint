class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      p current_user
      render json: { username: @user.username, id: @user.id }
    else
      render json: "Invalid username/password combination", status: 401
    end
  end

  def destroy
    current_user.reset_session_token
    session[:session_token] = nil
    render json: {}
  end
end
