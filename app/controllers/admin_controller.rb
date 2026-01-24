class AdminController < ApplicationController
  # before_action :authenticate_admin!, only: [:dashboard]
  before_action :authenticate_admin, only: [:dashboard]

  def dashboard
    blogs = Blog.all.map do |blog|
      BlogSerializer.new(blog).as_json
    end

    render inertia: "containers/admin/Admin", props: { blogs: }
  end

  def login
    binding.break
  end
end
