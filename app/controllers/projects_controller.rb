class ProjectsController < ApplicationController

  # adds link that will gather info on projects
  # no need for form since it fetches data
  def create
    link = project_params[:link]
    ProjectUpdater.add_project(link)

    redirect_to dashboard_path
  end

  def index
    projectIds = Admin.first.projects_order

    projects = Project.where(id: projectIds).in_order_of(:id, projectIds).map do |project|
      ProjectSerializer.new(project).as_hash
    end
    render inertia: "containers/Portfolio", props: { projects: }
  end

  def destroy
    Project.find(params[:id]).delete

    redirect_to dashboard_path
  end

  def add_all
    ProjectUpdater.populate_lit_git_projects

    redirect_to dashboard_path
  end

  private

  def project_params
    params.require(:project).permit(:link)
  end
end
