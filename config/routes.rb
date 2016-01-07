Rails.application.routes.draw do

  get 'budgets/index'

  root 'balances#index'
  resources :balances
  
end
