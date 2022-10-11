class UsersController < ApplicationController
  before_action :set_user, only: [:show,  :destroy]
  # skip_before_action :authorized, only: [:signup]

def index
  @users = User.all
  render json: @users
end

def show
  render json: @user
end

def login
  user = User.find_by(username: params[:username])
  if user && user.authenticate(params[:password])
    payload = {
      "user_id": user.id,
    }
      token = encode_token(payload)
    render json: {user: UserSerializer.new(user), jwt: token}
  else
    render json: {error: 'That user could not be found'}, status: 401
  end
end

def update
  token = request.headers["token"]
  payload = decode_token(token)[0]
  if payload
    user = User.find(payload["user_id"])
    user.image_url = params[:image_url]
    if user.save
      render json: user
    else
      render json: user.errors
    end
  else
    render json: {error: "401 incorrect token"}, status: 401
  end
end


def profile
  token = request.headers["token"]
  payload = decode_token(token)[0]
  if payload
    render json: User.find(payload["user_id"])
  else
    render json: {error: "401 incorrect token"}, status: 401
  end
end

def signup
  user = User.create!(username: params[:username], email: params[:email], password: params[:password], image_url: params[:image_url])
  if user
    payload = {
      "user_id": user.id,
    }
      token = encode_token(payload)
    render json: {user: user,jwt:token}
  else
    render json: {error: "cant create user"}
  end
end

def destroy
  @user.destroy
  render json: @user
end

private

  def set_user
    token = request.headers["token"]
    user_id = decode_token(token)
    @user = User.find(user_id)
  end

  def user_params
    params.require(:username).permit(:email, :password_digest, :image_url)
  end

end