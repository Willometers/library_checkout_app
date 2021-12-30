class UsersController < ApplicationController

    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user, status: :created
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end

    def index 
        users = User.all
        render json: users, include: :books
    end

    def create
        user = User.create!(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    private 

    def user_params 
        params.permit(:username)
    end

    # def user
    #   @user = User.find_by(id: params[:id])
    # end

end