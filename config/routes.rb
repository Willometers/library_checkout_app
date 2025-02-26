Rails.application.routes.draw do
  
  resources :books
  resources :checkouts
  resources :users
  resources :sessions
  delete "/logout", to: "sessions#destroy" 
  post '/login', to: 'sessions#create'
  post "/signup", to: "users#create"
  delete "/checkouts", to: "checkouts#destroy"
  get "/me", to: "users#show" 
  get "/books/:id/fanfictionify", to: "books#fanfictionify"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

end
