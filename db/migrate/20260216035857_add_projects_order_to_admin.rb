class AddProjectsOrderToAdmin < ActiveRecord::Migration[8.0]
  def change
    add_column :admins, :projects_order, :integer, array: true, default: []
  end
end
