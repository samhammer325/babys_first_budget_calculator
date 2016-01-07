Rails.application.routes.draw do

  get 'budgets/index'

  root 'budgets#index'
  resources :budgets
  
end
