Rails.application.routes.draw do
  
  resources :books
  resources :checkouts
  resources :users
  resources :sessions
  post '/login', to: 'sessions#create'
  get "users/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

end
