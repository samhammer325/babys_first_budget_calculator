class BudgetsController < ApplicationController
  def index
    @budgets = Budget.all
  end

  def create
    budget = Budget.create(budget_params)
    render json: Budget
  end

  def destroy
    Budget.find(params[:id]).destroy
    head :ok
  end

  private

  def budget_params
    params.require(:budget).permit(:name, :balance)
  end

end
