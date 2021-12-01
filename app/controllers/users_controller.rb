class UsersController < ApplicationController

    def index 
        readers = User.all
        render json: readers
    end
end
