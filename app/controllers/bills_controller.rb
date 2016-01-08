class BillsController < ApplicationController


  def create
    @bill = Bill.create(budget_params)
    render json: Bill
  end



  private

  def bill_params
    params.require(:bill).permit(:name, :cost)
  end

end