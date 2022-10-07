
class ApplicationController < ActionController::API

    before_action :authorized
 
    def jwt_key
        Rails.application.credentials.jwt_key
    end

    def encode_token(payload)
        JWT.encode(payload, jwt_key, 'HS256')
    end

    def decoded_token
        begin
          JWT.decode(token, jwt_key, true, { :algorithm => 'HS256' })
        rescue JWT::DecodeError
          [{error: "Invalid Token"}]
        end
    end
     def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
 
    def token
        request.headers['Authorization']
    end
     def user_id
        decoded_token.first['user_id']
    end
     def current_user
        @user ||= User.find_by(id: user_id)
    end
     def logged_in?
        !!current_user
    end

    private
    
    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end

 end