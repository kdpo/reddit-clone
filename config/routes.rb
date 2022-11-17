Rails.application.routes.draw do
  #devise_for :users
  #devise_for :users, controllers: { sessions: 'users/sessions' }
  devise_for :users, path: 'users', controllers: { sessions: "users/sessions"}
  root "home#index"
  #get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
