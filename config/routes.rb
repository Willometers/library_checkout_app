Rails.application.routes.draw do
  
  resources :books, only: [:index, :show, :create]
  resources :checkouts
  resources :users
  post '/login', to: 'sessions#create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

end
