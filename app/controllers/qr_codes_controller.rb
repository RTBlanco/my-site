class QrCodesController < ApplicationController
  before_action :set_qrcode, only: [ :show, :destroy ]

  def show
    qr_code = QrCode.find(params[:id])

    if qr_code
      qr_code.increment!(:hits)
      redirect_to root_path
    else
      redirect_to root_path, alert: "QR code not found"
    end
  end

  def destroy
    @qr_code.destroy
    head :no_content
  end

  def create
    @qr_code = QrCode.new(qr_code_params)
    if @qr_code.save
      redirect_to dashboard_path
    else
      redirect_to dashboard_path, alert: "Failed to create QR code"
    end
  end

  private

  def set_qrcode
    @qr_code = QrCode.find(params[:id])
  end

  def qr_code_params
    params.require(:qr_code).permit(:hits, :description, :code)
  end
end
