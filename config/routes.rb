Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/lasts'
  get 'posts/popular'
  get 'home/welcome'
  root 'home#index'
  resources :mems
  resources :photos
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
