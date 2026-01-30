class AddTitleToProjects < ActiveRecord::Migration[8.0]
  def change
    add_column :projects, :title, :string
  end
end
