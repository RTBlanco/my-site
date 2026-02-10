class Blog < ApplicationRecord
  has_one_attached :image

  validates_presence_of :content, :title, :category

  def image_url
    return nil unless image.attached?
    Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
  end
end
