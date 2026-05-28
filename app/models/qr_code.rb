class QrCode < ApplicationRecord
  has_one_attached :code, dependent: :destroy

end
