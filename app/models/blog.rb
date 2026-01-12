class Blog < ApplicationRecord
  has_one_attached :image

  def serialized
    serializable_hash(except: [ :created_at, :updated_at ]).merge(
      "dateISO" => created_at.to_date.iso8601,
      "dateLabel" => created_at.strftime("%b %d, %Y")
    )
  end
end
