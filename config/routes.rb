Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      resources :posts
      resources :users
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      post '/signup', to: 'users#signup'
end