class ProjectsController < ApplicationController

  # adds link that will gather info on projects
  # no need for form since it fetches data
  def create
    link = project_params[:link]
      if link.include?("github.com")
        repo_name = link.match(%r{https://github\.com/(.+?)\/?$})[1]
        Octokit.repo(repo_name)
      end
    asdad
  end

  def destroy
    # delete projects
  end

  private

  def project_params
    params.require(:project).permit(:link)
  end
end
