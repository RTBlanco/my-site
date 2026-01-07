class AddNameTitleBirthdayAndLocationToAdmin < ActiveRecord::Migration[8.0]
  def change
    add_column :admins, :name, :string
    add_column :admins, :title, :string
    add_column :admins, :birthday, :datetime
    add_column :admins, :location, :string
  end
end
