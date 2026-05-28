class QrCodesController < ApplicationController
  before_action :set_qrcode, only: [ :show, :destroy ]

  def show
    qr_code = QrCode.find(params[:id])

    if qr_code
      qr_code.hits += 1
    end
    redirect_to root_path
  end

  def destroy
    @qr_code.destroy
    head :no_content
  end

  def create
    @qr_code = QrCode.new(qr_code_params)
    if @qr_code.save
      render json: @qr_code, status: :created
    else
      render json: @qr_code.errors, status: :unprocessable_entity
    end
  end

  private

  def set_qrcode
    @qr_code = QrCode.find(params[:id])
  end

  def qr_code_params
    params.require(:qr_code).permit(:hits, :description, :path, :code)
  end
end
