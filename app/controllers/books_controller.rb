class BooksController < ApplicationController
    before_action :authorize
    skip_before_action :authorize
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    #before_action to authenticate/authorize a user is logged in
    
    def index 
        books = Book.all
        render json: books, include: :checkouts
    end

    def show 
        book = Book.find_by(id: params[:id])
        render json: book, include: :checkouts
    end

    def create 
        book = Book.create(book_params)
        render json: book
    end

    def fanfictionify
        book = Book.find_by(id: params[:id])
        book.description = "The protagonist and Sonic have a chance meeting in a coffee shop"
        book.save
        render json: book
    end

    private

    def book_params 
        params.permit(:author, :title, :genre, :description)
    end

    # def render_unprocessable_entity_response(invalid)
    #     render json: { errors: invalid.record.errors.fullmessage }, 
    #     status: unprocessable_entity
    # end 
    
end
