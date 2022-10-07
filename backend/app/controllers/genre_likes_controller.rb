class GenreLikesController < ApplicationController

    def create
        @genre_like = GenreLike.create!(genre_like_params)
        render json: @genre_like
    end

    private

    def genre_like_params
        params.permit(:user_id, :genre_id)
    end
    
end
