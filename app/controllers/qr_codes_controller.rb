class QrCodesController < ApplicationController
  before_action :set_qrcode, only: [ :show, :destroy ]

  def show
    qr_code = QrCode.find(params[:id])

    if qr_code
      qr_code.hits += 1
    end
    redirect_to root_path
  end

  def destroy; end

  def create; end

  private

  def set_qrcode
    @qr_code = QrCode.find(params[:id])
  end

  def qr_code_params
    params.require(:qr_code).permit(:hits, :description, :path, :code)
  end
end
