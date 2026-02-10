module ProjectUpdater
  extend self

  # add a project
  def add_project(url)
    if url.include?("https://github.com")
      repo_name = url.match(%r{https://github\.com/(.+?)\/?$})[1]
      add_github_project(repo_name)
    end
  end

  # will get all the projects with the 🔥 emoji in the description
  def populate_lit_git_projects
    repos = Octokit.repos(nil, { affiliation: "owner" }).reject(&:fork)
    repos.each do |repo|
      if !repo.description.nil? && repo.description.include?("🔥")
        Project.create do |p|
          p.title = repo.name
          p.description = repo.description
          p.link = repo.html_url
          p.category = "Coding"
        end
      end
    end
  end

  private

  def add_github_project(repo_name)
    repo = Octokit.repo(repo_name)
    image = Octokit.contents(repo_name, path: "github_test.png")
    Project.create do |p|
      p.title = repo.name
      p.description = repo.description
      p.link = repo.html_url
      p.category = "Coding"
      p.image_url = image.is_a?(String) ? nil : image[:download_url]
    end
  end
end
