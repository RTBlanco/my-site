class AdminController < ApplicationController
  before_action :authenticate_admin, only: [ :dashboard ]

  def dashboard
    projects = Project.all.map do |project|
      ProjectSerializer.new(project).as_hash
    end

    blogs = Blog.all.map do |blog|
      BlogSerializer.new(blog).as_hash
    end

    render inertia: "containers/admin/Admin", props: { blogs:, projects: }
  end

  def sign_admin_in
    @admin = Admin.find_by(email: params[:email])

    if @admin && @admin.valid_password?(params[:password])
      sign_in(@admin)
      redirect_to dashboard_path
    else
      redirect_to login_path, inertia: { errors: "Incorrect Login" }
    end
  end

  def logout
    sign_out current_admin

    redirect_to root_path
  end

  def login
    return redirect_to dashboard_path unless admin_signed_in?

    render inertia: "containers/admin/AdminLogin"
  end
end
