class Blog < ApplicationRecord
  has_one_attached :image

  after_commit :add_default_image, on: [:create, :update]

  def serialized
    serializable_hash(except: [ :created_at, :updated_at, :image ]).merge(
      "dateISO" => created_at.to_date.iso8601,
      "dateLabel" => created_at.strftime("%b %d, %Y")
    )
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
