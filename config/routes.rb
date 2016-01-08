Rails.application.routes.draw do
  root 'budgets#index'
  resources :budgets
  resources :bills
  get 'all_budgets', to: 'budgets#budgets'
end
