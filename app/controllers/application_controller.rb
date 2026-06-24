class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  include Devise::Controllers::Helpers
  allow_browser versions: :modern

  def index
    render inertia: "containers/About"
  end

  def contact
    contact = contact_params

    ContactMailer.contact_email(contact[:email], contact[:message], contact[:full_name]).deliver_now
    redirect_to "/Contact"
  end

  def authenticate_admin
    unless admin_signed_in?
      redirect_to :root
    end
  end

  def resume
    if Admin.first.resume.blob
      fileURL = rails_blob_url(Admin.first.resume, only_path: true)
    else
      fileURL = nil
    end
    render inertia: "containers/Resume", props: { fileURL: }
  end


  private

  def contact_params
    params.permit(:full_name, :email, :message)
  end
end
