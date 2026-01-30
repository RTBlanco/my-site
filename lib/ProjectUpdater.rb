require "octokit"
require "base64"


client = Octokit::Client.new(:access_token => "")

# puts client.repos({}, query: {type: "owner", sort: "asc"})
# puts client.repos(user: "RTBlanco")

user = client.user "RTBlanco"
# puts user.id
client.auto_paginate = true
repos = client.repos("RTBlanco", { affiliation: "owner", visibility: "public",  per_page: 100 })

repos.reject(&:fork).each do |repo|
  # if repo.
  #   puts repo.name
  # end
  puts repo.html_url
end

# repo = client.repo(owner: "RTBlanco", repo: "my-site")

# file = client.contents(repo.full_name, path: "repo-image.gif")
# puts repo.description == nil
# puts file.html_url
# puts repo.description
# file.each do |f|
#   puts f.path
# end
# image_bytes = Base64.decode64(file.content)

# # Save locally
# File.binwrite("logo.gif", image_bytes)
