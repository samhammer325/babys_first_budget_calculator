class AddBudgetIdToBills < ActiveRecord::Migration
  def change
    change_table(:bills) do |t|
      t.belongs_to :budget
    end
  end
end
