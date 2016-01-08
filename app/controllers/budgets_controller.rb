class BudgetsController < ApplicationController
  def index
  end

  def budgets
    @budgets = Budget.all
    render 'budgets'
  end

  def create
    budget = Budget.create(budget_params)
    render json: budget
  end

  def destroy
    Budget.find(params[:id]).destroy
    @budgets = Budget.all
    render 'budgets'
  end

  private

  def budget_params
    params.require(:budget).permit(:name, :balance)
  end

end
