class Api::KeysController < ApplicationController
  def index
    render json:  {
      cloud_name: ENV['CLOUD_NAME'],
      upload_preset: ENV["UPLOAD_PRESET"]
    }
  end
end
