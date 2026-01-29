require "octokit"


client = Octokit::Client.new(:access_token => "")

# puts client.repos({}, query: {type: "owner", sort: "asc"})
# puts client.repos(user: "RTBlanco")

user = client.user "RTBlanco"
puts user.id
# client.auto_paginate = true
# repos = client.repos("RTBlanco", { affiliation: "owner", visibility: "public",  per_page: 100 })

# repos.each do |repo|
#   puts repo.name
# end

repo = client.repo(owner: "RTBlanco", repo: "my-site")

puts client.readme(repo:"my-site", owner: "RTBlanco", :accept => 'application/vnd.github.html').content
