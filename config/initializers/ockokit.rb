Octokit.configure do |c|
  c.access_token = Rails.application.credentials.dig(:github, :access_token)
  c.auto_paginate = true
  c.per_page = 100
end

# if Rails.application.credentials.dig(:github, :token).blank?
#   Rails.logger.warn("[Octokit] Missing github.token in credentials")
# end
