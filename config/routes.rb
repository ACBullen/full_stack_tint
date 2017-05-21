Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index]
    resources :keys, only: [:index]
    resource :follows, only: [:create, :destroy]
  end
end
