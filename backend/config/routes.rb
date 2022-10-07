Rails.application.routes.draw do

  resources :users, only: [:create, :index, :show]
  resources :genres, only: [:index, :show]
  resources :matches, only: [:index, :show, :create, :update, :destroy]
  resources :genre_likes, only: [:index, :show, :create, :update, :destroy]


  post '/login', to: 'auth#create'
  post '/register', to: 'users#signup'
  get '/current_user', to: 'auth#show'
  get '/profile', to: 'users#profile'
  post '/signup', to: 'users#signup'
  patch '/update', to: 'users#update'
  delete '/destroy', to: 'users#destroy'

end

  # resources :users
  # resources :matches
  # resources :genre_likes
  # resources :genres

  # # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #     post '/login', to: 'auth#create'
  #     get '/current_user', to: 'auth#show'
  #     post '/signup', to: 'users#signup'