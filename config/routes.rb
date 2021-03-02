Rails.application.routes.draw do
  get 'records/index'
  resources :records, only: [:index]
end
