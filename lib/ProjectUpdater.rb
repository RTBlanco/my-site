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
    begin
      image = Octokit.contents(repo_name, path: "repo-image.png")
    rescue Octokit::NotFound => e
      puts "#{e}"
      image = nil
    end
    Project.create do |p|
      p.title = repo.name
      p.description = repo.description
      p.link = repo.html_url
      p.category = "Coding"
      p.image_url = image.nil? ? nil : image[:download_url]
    end
  end
end
