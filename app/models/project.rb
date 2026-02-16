class Project < ApplicationRecord
  after_commit :set_order

  private

  def set_order
    admin = Admin.first
    admin.projects_order << id
    admin.save
  end
end
