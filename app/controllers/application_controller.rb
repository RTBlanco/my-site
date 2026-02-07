class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  include Devise::Controllers::Helpers
  allow_browser versions: :modern

  def index
    render inertia: "containers/About"
  end

  def about
    render inertia: "containers/About"
  end

  def resume
    render inertia: "containers/Resume"
  end

  def portfolio
    render inertia: "containers/Porfolio"
  end

  def contact
    contact = contact_params

    ContactMailer.contact_email(contact[:email], contact[:message], contact[:full_name]).deliver_later

    # asdfsd
    redirect_to "/Contact"
  end

  def authenticate_admin
    unless admin_signed_in?
      redirect_to :root
    end
  end

  private

  def contact_params
    params.permit(:full_name, :email, :message)
  end
end
