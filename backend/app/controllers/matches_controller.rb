class MatchesController < ApplicationController

    def index
        @matches = Match.all
        render json: @matches
    end

    def show
        @match = Match.find(params[:id])
        render json: @match
    end
    
    def create
        @match = Match.create!(match_params)
        render json: @match
    end

    def update
        @match = Match.find(params[:id])
        @match.update(match_params)
        render json: @match
    end

    def destroy
        @match = Match.find(params[:id])
        @match.destroy
        head :no_content
    end

    private

    def match_params
        params.permit(:user_id, :liked_user_id)
    end

end
