Rails.application.routes.draw do
  resources :users
  resources :matches
  resources :genre_likes
  resources :genres

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
          post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      post '/signup', to: 'users#signup'
      
end