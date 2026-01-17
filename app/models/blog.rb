class Blog < ApplicationRecord
  has_one_attached :image

  after_commit :add_default_image, on: [:create, :update]

  def image_url
    return nil unless image.attached?
    Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
  end


  private

  def add_default_image
    unless image.attached?
      self.image.attach(
        io: File.open(Rails.root.join("app", "assets", "images", "default.png")),
        filename: "default.png",
        content_type: "image/png"
      )
    end
  end
end
