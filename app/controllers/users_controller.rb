class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
 
    def profile
      @user = User.find(params[:id])
      render json: {user: current_user}
    end
 
    def signup
      @user = User.create!(username: params[:username], password: params[:password])
      if @user.valid?
          @user.save
          @token = encode_token(@user)
          render json: { user: @user, jwt: @token }
      else
          render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end


    private
  
    def user_params
      params.permit(:username, :password)
  
    end

end
 