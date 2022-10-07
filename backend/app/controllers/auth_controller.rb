class AuthController < ApplicationController
    # skip_before_action :authorized
 
    # def create
    #     user = User.find_by(username: params[:username])
    #     if user && user.authenticate(params[:password])
    #       payload = {
    #         "user_id": user.id,
    #       }
    #         token = encode_token(payload)
    #       render json: {user: UserSerializer.new(user), jwt: token}
    #     else
    #       render json: {error: 'That user could not be found'}, status: 401
    #     end
    #   end
 
    # def show
    #     payload = decoded_token(params[:token])
    #     user = User.find_by(id: payload["user_id"])
    #     if user
    #         render json: {id: user.id, username: user.username}
    #     else
    #         render json: { error: 'No user could be found'}, status: 401
    #     end
    # end
 
    # private

    # def user_login_params
    #   params.require(:auth).permit(:username, :password)
    # end
 end