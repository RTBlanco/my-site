module ProjectUpdater

  def add_project(url)
    if url.include("https://github")
      repo_name = url.match(%r{https://github\.com/(.+?)\/?$})[1]
      add_github_project(repo_name)
    end
  end
  # will get all the projects with the 🔥 emoji in the description
  def populate_lit_git_projects;end

  private

  def add_github_project(repo_name)
    repo = Octokit.repo(repo_name)
    Project.create do |p|
      p.title = repo.name
      p.description = repo.description
      p.link = repo.html_url
      p.category = "coding"
    end
  end
end
