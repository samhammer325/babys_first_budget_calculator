Rails.application.routes.draw do

  root 'balances#index'
  resources :balances
  
end
