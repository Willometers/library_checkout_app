class CheckoutsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        checkouts = Checkout.all
        render json: checkouts
    end

    def create 
        checkout = Checkout.create!(checkout_params)
        render json: checkout
    end

    def destroy 
        Checkout.all.destroy_all
    end

    private

    def checkout_params
        params.permit(:user_id, :book_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.fullmessage }, 
        status: unprocessable_entity
    end 
    
end

