class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # def index
  #   @users = User.all
  #   render json: @users
  # end

  def profile
    @user = User.find(params[:id])
    render json: {user: current_user}
  end

  def signup
    @user = User.create!(username: params[:username], password: params[:password], email: params[:email], image_url: params[:image_url])
    if @user.valid?
        @user.save
        @token = encode_token(@user)
        render json: { user: @user, jwt: @token }
    else
        render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end
  
  private

  def user_params
    params.permit(:username, :password, :email, :image_url)

  end

end
