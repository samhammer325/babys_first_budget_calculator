json.budgets @budgets do |budget|
  json.id budget.id
  json.name budget.name
  json.balance budget.balance

  json.bills budget.bills
end
