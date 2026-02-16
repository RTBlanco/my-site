class AdminController < ApplicationController
  before_action :authenticate_admin, only: [ :dashboard, :update ]

  def dashboard
    projectIds = current_admin.projects_order

    projects = Project.where(id: projectIds).in_order_of(:id, projectIds).map do |project|
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
    return redirect_to dashboard_path unless !admin_signed_in?

    render inertia: "containers/admin/AdminLogin"
  end

  def update
    current_admin.update(admin_params)

    redirect_to dashboard_path
  end

  private

  def admin_params
    params.require(:admin).permit(projects_order: [])
  end
end
