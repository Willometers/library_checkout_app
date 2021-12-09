class CheckoutsController < ApplicationController

    def index 
        checkouts = Checkout.all
        render json: checkouts
    end

    def create 
        checkout = Checkout.create(checkout_params)
        render json: checkout
    end

    def destroy 
        checkout = Checkout.find_by(id: params[:id])
        if checkout
            checkout.destroy
            head :no_content
        else
            render json { error: "Checkout not found", status: not_found }
    end
    

    private

    def checkout_params
        params.permit(:user_id, :book_id)
    end
    
end
