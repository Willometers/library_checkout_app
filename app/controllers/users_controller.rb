class UsersController < ApplicationController
    # validation?

    def show 
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def index 
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

    private 

    def user_params 
        params.permit(:email, :password)
    end

end