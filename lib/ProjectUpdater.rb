require "octokit"


client = Octokit::Client.new(:access_token => "d")

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

puts repo.description
