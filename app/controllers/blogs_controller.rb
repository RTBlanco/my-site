class BlogsController < ApplicationController
  def show
    render inertia: "containers/blogs/Blog"
  end

  def index
    render inertia: "containers/blogs/Blogs"
  end
end
