Rails.application.routes.draw do


  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    resources :photos do
      resources :mems
    end
    get 'posts/index'
    get 'posts/lasts'
    get 'posts/popular'
    get 'home/welcome'
    root 'home#index'
    resources :mems
    resources :photos
    devise_for :users
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
