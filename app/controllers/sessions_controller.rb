class SessionsController < ApplicationController

      def index
        user = User.find_by(username: params[:username])
        session[:session_hello] ||= "World"
        cookies[:cookies_hello] ||= "World"
      #byebug
        render json: { 
            session: session, 
            cookies: cookies.to_hash,
            user_id: session[:user_id]
            }
      end
      
      def create
            user = User.find_by(username: params[:username])
            session[:user_id] = user.id
            render json: user
            # byebug
      end

      def show
            render json: session[:user_id] 
      end

      def destroy
            session.delete :user_id
            head :no_content
      end 

      private 


end
