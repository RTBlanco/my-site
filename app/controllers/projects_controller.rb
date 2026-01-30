class ProjectsController < ApplicationController

  # adds link that will gather info on projects
  # no need for form since it fetches data
  def create
    link = project_params[:link]
      if link.include?("github.com")
        repo_name = link.match(%r{https://github\.com/(.+?)\/?$})[1]
        repo = Octokit.repo(repo_name)

        Project.create(title: repo.name, description: repo.description, link: repo.html_url)
      end
    # asdad
    redirect_to dashboard_path
  end

  def index
    projects = Blog.all.map do |blog|
      ProjectSerializer.new(blog).as_hash
    end
    render inertia: "containers/Portfolio", props: { projects: }
  end

  def destroy
    # delete projects
  end

  private

  def project_params
    params.require(:project).permit(:link)
  end
end
