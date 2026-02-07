class ContactMailer < ApplicationMailer
  # prepend_view_path "views/mailers/contact_mailers/"

  def contact_email(email, message, full_name = "No Name given")
    @email = email
    @message = message
    @full_name = full_name
    mail(subject: "Contact from Website")
  end
end
