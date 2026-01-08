class BlogsController < ApplicationController
  def show
    render intertia: "containers/blogs/Blog"
  end

  def index
    render intertia: "containers/blogs/Blogs"
  end
end
