Rails.application.routes.draw do
  
  resources :books
  resources :checkouts
  resources :users
  resources :sessions
  delete "/logout", to: "sessions#destroy" 
  post '/login', to: 'sessions#create'
  post "signup", to: "users#create"
  delete "/checkouts", to: "checkouts#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

end
