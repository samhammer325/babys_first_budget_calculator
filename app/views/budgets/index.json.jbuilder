json.budgets @budgets do |budget|
  json.id budget.id
  json.name budget.name
  json.complete budget.balance

  json.url item_url(budget)
end
