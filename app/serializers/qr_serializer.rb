class QrSerializer
  def initialize(qr_code)
    @qr_code = qr_code
  end

  def as_hash
    @qr_code.serializable_hash(except: [ :created_at, :updated_at, :code ]).merge(
      "code" => @qr_code.code_url,
      "path" => Rails.application.routes.url_helpers.qr_code_path(@qr_code, host: Rails.application.config.hosts.first)
    )
  end

  def to_json
    as_hash.to_json
  end
end
