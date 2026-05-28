class QrCode < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one_attached :code, dependent: :destroy
  before_commit :create_qr_code, on: :create


  private

  def create_qr_code
    host = Rails.application.config.action_controller.default_url_options[:host]

    qrcode = RQRCode::QRCode.new(qrcode_url(self, host:))

    png = qrcode.as_png(
      bit_depth: 1,
      border_modules: 4,
      color_mode: ChunkyPNG::COLOR_GRAYSCALE,
      color: "black",
      file: nil,
      fill: "white",
      module_px_size: 6,
      resize_exactly_to: false,
      resize_gte_to: false,
      size: 120
    )

    self.code.attach(
      io: StringIo.new(png.to_s),
      filename: "qr-code-#{id}.png",
      content_type: "image/png"
    )
  end
end
